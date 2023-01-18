import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { getJwtAccessOptions } from '../../config/jwt.config';
import { AccessTokenStrategy } from './strategies/access-token.strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtAccessOptions
  })],
  providers: [{
    provide: 'JwtAccessService',
    useExisting: JwtService
    },
    AccessTokenStrategy
  ],
  exports: ['JwtAccessService'],
})
export class JwtAccessModule {}
