import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { ApiBody } from '@nestjs/swagger';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  async getBankAccounts(): Promise<any> {
    return this.accountsService.getBankAccounts();
  }

  @Post('authorize')
  @ApiBody({ schema: { example: { userId: 'john@outlook.com' } } })
  async authorizeBankAccount(@Body('userId') userId: string): Promise<any> {
    return this.accountsService.authorizeAccount(userId);
  }

  @Get('consent')
  async getConsent(@Query('consent') consent: string): Promise<any> {
    return this.accountsService.getConsent(consent);
  }

  @Get('userAccounts')
  async getUserAccounts(): Promise<any> {
    return this.accountsService.getUserAccounts();
  }
}
