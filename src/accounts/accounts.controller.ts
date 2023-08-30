import { Controller, Get } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller("accounts")
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  async getBankAccounts(): Promise<any> {
    return this.accountsService.getBankAccounts();
  }

}
