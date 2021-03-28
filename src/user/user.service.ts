import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { query } from 'express';
import { Connection, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private connection: Connection,
  ) {}

  async findOne(user: User): Promise<User | undefined> {
    return this.userRepository.findOne(user.name);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async createUser(user: User) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const findUser = await queryRunner.manager.findOne<User>(user.name);
      if (findUser) {
        console.log('null');
        return null;
      } else {
        const result = await queryRunner.manager.save(user);
        await queryRunner.commitTransaction();
        console.log('create User', result);
        return result;
      }
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  // async createMany(users: User[]) {
  //   const queryRunner = this.connection.createQueryRunner();

  //   await queryRunner.connect();
  //   await queryRunner.startTransaction();
  //   try {
  //     await queryRunner.manager.save(users[0]);
  //     await queryRunner.manager.save(users[1]);

  //     await queryRunner.commitTransaction();
  //   } catch (err) {
  //     await queryRunner.rollbackTransaction();
  //   } finally {
  //     await queryRunner.release();
  //   }
  // }
}
