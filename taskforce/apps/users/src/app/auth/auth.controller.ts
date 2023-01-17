import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard, UserData } from '@taskforce/core';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User has been successfully logged.',
  })
  @Post('login')
  async login(@Body() dto: LoginUserDto) {
    const verifiedUser = await this.userService.verifyUser(dto);
    return this.authService.loginUser(verifiedUser);
  }

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Auth token is valid.',
  })
  @Get()
  @UseGuards(JwtAuthGuard)
  private async check(@UserData('_id') id: string) {
    const user = await this.userService.getById(id);
    if (!user) {
      return HttpStatus.UNAUTHORIZED;
    }
    return HttpStatus.ACCEPTED;
  }
}
