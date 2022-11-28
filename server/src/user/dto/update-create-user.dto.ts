import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-create-user.dto';

export class UpdateCreateUserDto extends PartialType(CreateUserDto) {}
