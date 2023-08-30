/* eslint-disable */
export default async () => {
  const t = {};
  return {
    '@nestjs/swagger/plugin': {
      models: [],
      controllers: [
        [
          import('./accounts/accounts.controller'),
          {
            AccountsController: {
              getBankAccounts: { type: [Object] },
              authorizeBankAccount: { type: [Object] },
              getConsent: {},
              getUserAccounts: { type: [Object] },
              getAccountTransactions: { type: Object },
            },
          },
        ],
      ],
    },
    '@nestjs/graphql/plugin': {
      models: [
        [
          import('./common/models/base.model'),
          { BaseModel: { id: {}, createdAt: {}, updatedAt: {} } },
        ],
      ],
    },
  };
};
