import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRdo } from './rdo/user.rdo';
import CreateUserDto from './dto/create-user.dto';
import { fillObject } from '@taskforce/core';
import { LoginUserDto } from './dto/login-user.dto';
import UpdateUserDto from './dto/update-user.dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import UpdateUserAvatarDto from './dto/update-user-avatar.dto';
import { UserAvatarRdo } from './rdo/user-avatar.rdo';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import UpdateUserPasswordDto from './dto/update-user-password.dto';
import { MongoidValidationPipe } from '../pipes/mongoid-validation.pipe';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.',
  })
  async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return fillObject(UserRdo, newUser);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User has been successfully logged.',
  })
  async login(@Body() dto: LoginUserDto) {
    const verifiedUser = this.authService.verifyUser(dto);
    return fillObject(LoggedUserRdo, verifiedUser);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User is found',
  })
  async show(@Param('id') id: string) {
    const existUser = await this.authService.getUser(id);
    return fillObject(UserRdo, existUser);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('password')
  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User password has been successfully updated',
  })
  async updateUserPassword(@Body() dto: UpdateUserPasswordDto) {
    const updatedUser = await this.authService.updateUserPassword(dto);
    return fillObject(LoggedUserRdo, updatedUser);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('avatar')
  @ApiResponse({
    type: UserAvatarRdo,
    status: HttpStatus.OK,
    description: 'User avatar has been successfully updated',
  })
  async updateUserAvatar(@Body() dto: UpdateUserAvatarDto) {
    const updatedUser = await this.authService.updateUserAvatar(dto);
    return fillObject(UserAvatarRdo, updatedUser);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User data has been successfully updated',
  })
  async updateUserData(
    @Param('id', MongoidValidationPipe) id: string,
    @Body() dto: UpdateUserDto
  ) {
    const updatedUser = await this.authService.updateUserById(id, dto);
    return fillObject(UserRdo, updatedUser);
  }
}
