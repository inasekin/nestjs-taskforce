export interface TokenSession {
  _id?;
  userId: string;
  tokenHash?: string;
  expires: Date;
}
