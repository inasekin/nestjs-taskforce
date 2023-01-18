import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TokenSessionModule } from '../tokens/token-session.module';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAccessModule } from './jwt-access.module';
import { JwtRefreshModule } from './jwt-refresh.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    TokenSessionModule,
    JwtAccessModule,
    JwtRefreshModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {}
