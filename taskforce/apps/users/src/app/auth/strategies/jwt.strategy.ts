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
    email,
    avatar,
    role,
  }: Pick<User, 'email' | 'role' | 'avatar'>) {
    return { email, avatar, role };
  }
}
