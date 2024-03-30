import {baseApi as api} from '../utils/baseApi';

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    postAuthLocal: build.mutation<
      PostAuthLocalApiResponse,
      PostAuthLocalApiArg
    >({
      query: queryArg => ({
        url: `/auth/local`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    postAuthLocalRegister: build.mutation<
      PostAuthLocalRegisterApiResponse,
      PostAuthLocalRegisterApiArg
    >({
      query: queryArg => ({
        url: `/auth/local/register`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getAuthByProviderCallback: build.query<
      GetAuthByProviderCallbackApiResponse,
      GetAuthByProviderCallbackApiArg
    >({
      query: queryArg => ({url: `/auth/${queryArg.provider}/callback`}),
    }),
    postAuthForgotPassword: build.mutation<
      PostAuthForgotPasswordApiResponse,
      PostAuthForgotPasswordApiArg
    >({
      query: queryArg => ({
        url: `/auth/forgot-password`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    postAuthResetPassword: build.mutation<
      PostAuthResetPasswordApiResponse,
      PostAuthResetPasswordApiArg
    >({
      query: queryArg => ({
        url: `/auth/reset-password`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    postAuthChangePassword: build.mutation<
      PostAuthChangePasswordApiResponse,
      PostAuthChangePasswordApiArg
    >({
      query: queryArg => ({
        url: `/auth/change-password`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getAuthEmailConfirmation: build.query<
      GetAuthEmailConfirmationApiResponse,
      GetAuthEmailConfirmationApiArg
    >({
      query: queryArg => ({
        url: `/auth/email-confirmation`,
        params: {confirmation: queryArg.confirmation},
      }),
    }),
    postAuthSendEmailConfirmation: build.mutation<
      PostAuthSendEmailConfirmationApiResponse,
      PostAuthSendEmailConfirmationApiArg
    >({
      query: queryArg => ({
        url: `/auth/send-email-confirmation`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
  }),
  overrideExisting: false,
});
export {injectedRtkApi as authentication};
export type PostAuthLocalApiResponse =
  /** status 200 Connection */ UsersPermissionsUserRegistration;
export type PostAuthLocalApiArg = {
  body: {
    identifier?: string;
    password?: string;
  };
};
export type PostAuthLocalRegisterApiResponse =
  /** status 200 Successful registration */ UsersPermissionsUserRegistration;
export type PostAuthLocalRegisterApiArg = {
  body: {
    username?: string;
    email?: string;
    password?: string;
  };
};
export type GetAuthByProviderCallbackApiResponse =
  /** status 200 Returns a jwt token and user info */ UsersPermissionsUserRegistration;
export type GetAuthByProviderCallbackApiArg = {
  /** Provider name */
  provider: string;
};
export type PostAuthForgotPasswordApiResponse = /** status 200 Returns ok */ {
  ok?: true;
};
export type PostAuthForgotPasswordApiArg = {
  body: {
    email?: string;
  };
};
export type PostAuthResetPasswordApiResponse =
  /** status 200 Returns a jwt token and user info */ UsersPermissionsUserRegistration;
export type PostAuthResetPasswordApiArg = {
  body: {
    password?: string;
    passwordConfirmation?: string;
    code?: string;
  };
};
export type PostAuthChangePasswordApiResponse =
  /** status 200 Returns a jwt token and user info */ UsersPermissionsUserRegistration;
export type PostAuthChangePasswordApiArg = {
  body: {
    password: string;
    currentPassword: string;
    passwordConfirmation: string;
  };
};
export type GetAuthEmailConfirmationApiResponse = unknown;
export type GetAuthEmailConfirmationApiArg = {
  /** confirmation token received by email */
  confirmation?: string;
};
export type PostAuthSendEmailConfirmationApiResponse =
  /** status 200 Returns email and boolean to confirm email was sent */ {
    email?: string;
    sent?: true;
  };
export type PostAuthSendEmailConfirmationApiArg = {
  body: {
    email?: string;
  };
};
export type UsersPermissionsUser = {
  id?: number;
  username?: string;
  email?: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
export type UsersPermissionsUserRegistration = {
  jwt?: string;
  user?: UsersPermissionsUser;
};
export type Error = {
  data?: (object | object[]) | null;
  error: {
    status?: number;
    name?: string;
    message?: string;
    details?: object;
  };
};
export const {
  usePostAuthLocalMutation,
  usePostAuthLocalRegisterMutation,
  useGetAuthByProviderCallbackQuery,
  usePostAuthForgotPasswordMutation,
  usePostAuthResetPasswordMutation,
  usePostAuthChangePasswordMutation,
  useGetAuthEmailConfirmationQuery,
  usePostAuthSendEmailConfirmationMutation,
} = injectedRtkApi;
export default injectedRtkApi;
