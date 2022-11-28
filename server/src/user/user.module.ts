import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from '../database/database.module';
import { UsersProviders } from '../database/entities/users.providers';
import { CreateUserDto } from './dto/create-create-user.dto';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, CreateUserDto, ...UsersProviders],
})
export class UserModule {}
