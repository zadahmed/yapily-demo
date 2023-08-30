import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Bank } from './dto/banks.dto';

@Injectable()
export class AccountsService {
  username: string;
  password: string;
  consent: string;

  constructor(private configService: ConfigService) {
    this.username = this.configService.get('YAPILY_APPLICATION_ID');
    this.password = this.configService.get('YAPILY_APPLICATION_SECRET');
  }

  async getBankAccounts() {
    const resp = await fetch(`https://api.yapily.com/institutions`, {
      method: 'GET',
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(`${this.username}:${this.password}`).toString('base64'),
      },
    });

    const data = await resp.json();
    const bankData: Array<Bank> = data.data;
    return bankData;
  }

  async authorizeAccount(userId: string) {
    const resp = await fetch(`https://api.yapily.com/account-auth-requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'psu-id': 'string',
        'psu-corporate-id': 'string',
        'psu-ip-address': 'string',
        Authorization: 'Basic ' + btoa(`${this.username}:${this.password}`),
      },
      body: JSON.stringify({
        applicationUserId: userId,
        institutionId: 'modelo-sandbox',
        callback: 'http://localhost:3000/accounts/consent',
      }),
    });

    const data = await resp.json();
    const bankData: Array<Bank> = data.data;
    return bankData;
  }

  async getConsent(consent: string) {
    this.consent = consent;
  }

  async getUserAccounts() {
    const resp = await fetch(`https://api.yapily.com/accounts`, {
      method: 'GET',
      headers: {
        consent: this.consent,
        'psu-id': 'string',
        'psu-corporate-id': 'string',
        'psu-ip-address': 'string',
        Authorization: 'Basic ' + btoa(`${this.username}:${this.password}`),
      },
    });

    const data = await resp.json();
    const bankAccountData: Array<BankAccount> = data.data;
    return bankAccountData;
  }
}
