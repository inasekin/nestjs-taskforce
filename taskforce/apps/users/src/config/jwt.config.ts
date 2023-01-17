import { ConfigService, registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
import * as process from 'process';

export const jwtOptions = registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET,
}));

export async function getJwtConfig(
  configService: ConfigService
): Promise<JwtModuleOptions> {
  return {
    secret: configService.get<string>('jwt.secret'),
    signOptions: { expiresIn: '600s', algorithm: 'HS256' },
  };
}
