import { PickType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import CreateUserDto from '../../user/dto/create-user.dto';

export class TokenDataDto extends PickType(CreateUserDto,[
  'email', 'role']){
  @IsString()
  public id: string
}
