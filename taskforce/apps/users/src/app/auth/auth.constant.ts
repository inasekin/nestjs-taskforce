export const SALT_ROUNDS = 11;

export const AuthApiError = {
  AlreadyAuthorized: `The user has an active session, please logout`,
  AccessTokenIsExpired: `The access token is expired`,
  AccessTokenIsInvalid: `The access token is invalid, please perform authorization`,
  RefreshTokenIsExpired: `The refresh token is expired, please perform authorization`,
  RefreshTokenNotFound: `The refresh token not found, please perform authorization`,
  RefreshTokenIsWrong: `The refresh token not same as last registered refresh token, please perform authorization`,
} as const;
