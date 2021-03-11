import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>, private connection: Connection){}

    async findOne(id: number): Promise<User> {
        return this.userRepository.findOne(id);
    }

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
