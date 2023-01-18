import { UserMain } from '@taskforce/shared-types';

export interface JwtPayload extends Pick<UserMain, 'email' | 'role'> {
  sub: string;
}
