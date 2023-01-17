import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@taskforce/shared-types';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async loginUser(user: User) {
    const payload = {
      sub: user._id,
      email: user.email,
      role: user.role,
      name: user.userName,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async getTokenData(token: string) {
    return this.jwtService.decode(token);
  }
}
