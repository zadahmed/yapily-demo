/* eslint-disable */
export default async () => {
  const t = {
    ['./users/models/user.model']: await import('./users/models/user.model'),
  };
  return {
    '@nestjs/swagger/plugin': {
      models: [],
      controllers: [
        [
          import('./app.controller'),
          {
            AppController: {
              getHello: { type: String },
              getHelloName: { type: String },
            },
          },
        ],
      ],
    },
    '@nestjs/graphql/plugin': {
      models: [
        [
          import('./auth/dto/signup.input'),
          {
            SignupInput: {
              email: {},
              password: {},
              firstname: { nullable: true },
              lastname: { nullable: true },
            },
          },
        ],
        [
          import('./auth/models/token.model'),
          { Token: { accessToken: {}, refreshToken: {} } },
        ],
        [
          import('./common/models/base.model'),
          { BaseModel: { id: {}, createdAt: {}, updatedAt: {} } },
        ],

        [
          import('./users/models/user.model'),
          {
            User: {
              email: {},
              firstname: { nullable: true },
              lastname: { nullable: true },
              role: {},
            },
          },
        ],
        [
          import('./auth/models/auth.model'),
          {
            Auth: { user: { type: () => t['./users/models/user.model'].User } },
          },
        ],
        [
          import('./auth/dto/login.input'),
          { LoginInput: { email: {}, password: {} } },
        ],
        [
          import('./auth/dto/refresh-token.input'),
          { RefreshTokenInput: { token: {} } },
        ],
        [
          import('./users/dto/change-password.input'),
          { ChangePasswordInput: { oldPassword: {}, newPassword: {} } },
        ],
        [
          import('./users/dto/update-user.input'),
          {
            UpdateUserInput: {
              firstname: { nullable: true },
              lastname: { nullable: true },
            },
          },
        ],
        [
          import('./common/pagination/pagination.args'),
          {
            PaginationArgs: {
              skip: { nullable: true, type: () => Number },
              after: { nullable: true, type: () => String },
              before: { nullable: true, type: () => String },
              first: { nullable: true, type: () => Number },
              last: { nullable: true, type: () => Number },
            },
          },
        ],

        [
          import('./common/pagination/page-info.model'),
          {
            PageInfo: {
              endCursor: { nullable: true },
              hasNextPage: {},
              hasPreviousPage: {},
              startCursor: { nullable: true },
            },
          },
        ],
      ],
    },
  };
};
