import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { getJwtRefreshOptions } from '../../config/jwt.config';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtRefreshOptions,
    }),
  ],
  providers: [
    {
      provide: 'JwtRefreshService',
      useExisting: JwtService,
    },
    RefreshTokenStrategy,
  ],
  exports: ['JwtRefreshService'],
})
export class JwtRefreshModule {}
