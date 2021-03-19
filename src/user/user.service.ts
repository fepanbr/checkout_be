import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private connection: Connection,
  ) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUser(userId: number) {
    console.log('userId', userId);
    return await this.userRepository.findOne({
      select: ['id', 'name'],
      where: [{ id: userId }],
    });
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  // async createUser(user: User) {
  //   console.log('user', user);
  //   const queryRunner = this.connection.createQueryRunner();
  //   console.log('user', queryRunner);

  //   await queryRunner.connect();
  //   await queryRunner.startTransaction();
  //   try {
  //     const result = await queryRunner.manager.save(user);
  //     await queryRunner.commitTransaction();
  //     console.log('user', result);
  //     return result;
  //   } catch (err) {
  //     await queryRunner.rollbackTransaction();
  //   } finally {
  //     await queryRunner.release();
  //   }
  // }

  async createMany(users: User[]) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(users[0]);
      await queryRunner.manager.save(users[1]);

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
