import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() userDto: User) {
    return this.userService.createUser(userDto);
  }
  // @Get(':id')
  // async getUser(@Param() param) {
  //   return this.userService.getUser(param.id);
  // }
  // @Get()
  // async getAllUsers(): Promise<User[]> {
  //   return this.userService.getUsers();
  // }
}
