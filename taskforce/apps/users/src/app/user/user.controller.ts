import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject, JwtAuthGuard, Roles, UserData } from '@taskforce/core';
import { AuthService } from '../auth/auth.service';
import { LoggedUserRdo } from '../auth/rdo/logged-user.rdo';
import { MongoidValidationPipe } from '../pipes/mongoid-validation.pipe';
import CreateUserDto from './dto/create-user.dto';
import UpdateUserPasswordDto from './dto/update-user-password.dto';
import UpdateUserDto from './dto/update-user.dto';
import { UserRdo } from './rdo/user.rdo';
import { multerOptions, ResponseGroup } from './user.constant';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.',
  })
  @Post('register')
  async registerUser(@Body() dto: CreateUserDto) {
    const newUser = await this.userService.create(dto);

    return fillObject(UserRdo, newUser, [newUser.role]);
  }

  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User is found',
  })
  @Get(':id')
  @Roles('client')
  @UseGuards(JwtAuthGuard)
  async show(@Param('id', MongoidValidationPipe) id: string) {
    const existUser = await this.userService.getById(id);

    return fillObject(UserRdo, existUser, [existUser.role]);
  }

  @ApiBody({
    type: UpdateUserDto,
    description: 'Update user data',
  })
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User data has been successfully updated',
  })
  @Patch()
  @UseGuards(JwtAuthGuard)
  public async updateUserData(
    @UserData('_id') id: string,
    @Body() dto: UpdateUserDto
  ) {
    const updatedUser = await this.userService.update(id, dto);
    return fillObject(UserRdo, updatedUser, [updatedUser.role]);
  }

  @ApiBody({
    type: UpdateUserPasswordDto,
    description: 'Update user password',
  })
  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User password has been successfully updated',
  })
  @Patch('password')
  @UseGuards(JwtAuthGuard)
  public async updateUserPassword(
    @UserData('_id') id: string,
    @Body() dto: UpdateUserPasswordDto
  ) {
    const updatedUser = await this.userService.updatePassword(id, dto);
    return fillObject(UserRdo, updatedUser, [ResponseGroup.Logged]);
  }

  @ApiBody({
    type: UpdateUserPasswordDto,
    description: 'Upload user avatar',
  })
  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User avatar has been successfully uploaded',
  })
  @Post('avatar')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('avatar', multerOptions))
  public async uploadUserAvatar(
    @UserData() user: any,
    @UploadedFile() file: any
  ) {
    const id = user._id;

    const dto: UpdateUserDto = {
      avatar: {
        url: file.path,
        name: file.filename,
      },
    };

    const updatedUser = await this.userService.update(id, dto);
    return fillObject(UserRdo, updatedUser, [ResponseGroup.Avatar]);
  }
}
