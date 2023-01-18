import { TokenSession } from '@taskforce/shared-types';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from '../auth/auth.constant';

export class TokenSessionEntity implements TokenSession {
  public _id: string;
  public userId: string;
  public tokenHash: string;
  public expires: Date;

  constructor(tokenData: TokenSession) {
    this.fillEntity(tokenData);
  }
  public async setToken(token: string): Promise<TokenSession> {
    const salt = await genSalt(SALT_ROUNDS);
    this.tokenHash = await hash(token, salt);
    return this;
  }

  public async compareToken(token: string): Promise<boolean> {
    return compare(token, this.tokenHash);
  }
  public toObject() {
    return {...this};
  }

  public fillEntity(tokenData: TokenSession) {
    this._id = tokenData._id;
    this.userId = tokenData.userId;
    this.tokenHash = tokenData.tokenHash;
    this.expires = tokenData.expires;
  }
}
