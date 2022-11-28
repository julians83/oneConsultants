import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-create-user.dto';
// import { UpdateCreateUserDto } from './dto/update-create-user.dto';

@Controller('create-user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAllController() {
    const findUser = this.userService.findAll();
    console.log(`la query del controller${findUser}`);
    return findUser;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log('EL DTO', createUserDto);
    const createUserService = this.userService.createUser(createUserDto);
    return createUserService;
  }
}
