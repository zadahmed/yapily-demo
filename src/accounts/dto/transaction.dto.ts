interface Transaction {
    id: string;
    date: string;
    bookingDateTime: string;
    valueDateTime: string;
    status: string;
    amount: number;
    currency: string;
    transactionAmount: {
        amount: number;
        currency: string;
    };
    reference: string;
    description: string;
    transactionInformation: string[];
    isoBankTransactionCode: {
        domainCode: {
            code: string;
            name: string;
        };
        familyCode: {
            code: string;
            name: string;
        };
        subFamilyCode: {
            code: string;
            name: string;
        };
    };
    proprietaryBankTransactionCode: {
        code: string;
        issuer: string;
    };
    balance: {
        type: string;
        balanceAmount: {
            amount: number;
            currency: string;
        };
    };
    enrichment: {
        transactionHash: {
            hash: string;
        };
    };
}
