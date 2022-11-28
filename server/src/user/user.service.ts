import { Injectable, Inject } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-create-user.dto';
// import { CreateAcademicDto } from './dto/create-academic.dto';
import { Users } from '../database/entities/users.entity';

@Injectable()
export class UserService {
  constructor(
    // private createUserDto: CreateUserDto,
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof Users,
  ) {}

  async findOne(username: any) {
    return username;
  }

  async findAll(): Promise<Users[]> {
    const findUsers = await this.usersRepository.findAll<Users>();
    console.log(' la findUsers en el service ==================>', findUsers);
    return findUsers;
  }

  async createUser(payload: any): Promise<Users[]> {
    console.log('EL PAYLOAD', payload);
    const queryCreateUser = {
      ...payload,
      active: 1,
      createdAt: new Date(),
      updatedAt: null,
    };
    try {
      console.log('LA DATA DEL POST', queryCreateUser);
      const createUser = await this.usersRepository.create<Users>(
        queryCreateUser,
      );
      console.log(createUser);
      return [createUser];
    } catch {
      throw console.error();
    }
  }

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new createUser';
  // }

  // findAll() {
  //   return `This action returns all createUser`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} createUser`;
  // }

  // update(id: number, updateCreateUserDto: UpdateCreateUserDto) {
  //   return `This action updates a #${id} createUser`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} createUser`;
  // }
}
