import { PassportStrategy } from '@nestjs/passport';
import { User } from '@taskforce/shared-types';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('jwt.secret'),
    });
  }

  async validate({
    _id,
    email,
    avatar,
    role,
  }: Pick<User, '_id' | 'email' | 'role' | 'avatar'>) {
    return { _id, email, avatar, role };
  }
}
