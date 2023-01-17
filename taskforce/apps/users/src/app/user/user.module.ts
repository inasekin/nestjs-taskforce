import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from './user.model';
import UserRepository from './user.repository';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    // AuthModule,
    MongooseModule.forFeature([
      {
        name: UserModel.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [UserRepository, UserService, AuthService, JwtService],
  exports: [UserRepository],
  controllers: [UserController],
})
export class UserModule {}
