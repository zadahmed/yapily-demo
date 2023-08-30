import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BankDto } from './dto/banks.dto';

@Injectable()
export class AccountsService {
  constructor(private configService: ConfigService) {}

  async getBankAccounts() {
    const username = this.configService.get('YAPILY_APPLICATION_ID');
    const password = this.configService.get('YAPILY_APPLICATION_SECRET');

    const resp = await fetch(`https://api.yapily.com/institutions`, {
      method: 'GET',
      headers: {
        Authorization:
          'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
      },
    });

    const data = await resp.json();
    const bankData: Array<BankDto> = data.data;
    return bankData;
  }
}
