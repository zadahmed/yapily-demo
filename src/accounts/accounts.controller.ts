import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { ApiBody } from '@nestjs/swagger';
import { Bank } from "./dto/banks.dto";

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  async getBankAccounts(): Promise<Bank[]> {
    return this.accountsService.getBankAccounts();
  }

  @Post('authorize')
  @ApiBody({ schema: { example: { userId: 'john@outlook.com' } } })
  async authorizeBankAccount(@Body('userId') userId: string): Promise<Bank[]> {
    return this.accountsService.authorizeAccount(userId);
  }

  @Get('consent')
  async getConsent(@Query('consent') consent: string) {
    return this.accountsService.getConsent(consent);
  }

  @Get('userAccounts')
  async getUserAccounts(): Promise<BankAccount[]> {
    return this.accountsService.getUserAccounts();
  }

  @Post("accountTransactions")
  @ApiBody({ schema: { example: { accountId: '700004000000000000000007' } } })
  async getAccountTransactions(@Body('accountId') accountId: string): Promise<any>{
    return this.accountsService.getAccountTransactions(accountId);
  }
}
