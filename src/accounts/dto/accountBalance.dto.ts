interface AccountBalance {
  type: string;
  dateTime: string;
  balanceAmount: {
    amount: number;
    currency: string;
  };
  creditLineIncluded: boolean;
  creditLines: any[];
}

interface AccountIdentification {
  type: string;
  identification: string;
}

interface AccountName {
  name: string;
}

interface BankAccount {
  id: string;
  type: string;
  balance: number;
  currency: string;
  usageType: string;
  accountType: string;
  nickname: string;
  accountNames: AccountName[];
  accountIdentifications: AccountIdentification[];
  accountBalances: AccountBalance[];
}
