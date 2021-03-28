import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { WorkTimeDto } from './dto/workTime.dto';
import { Worktime } from './worktime.entity';

@Injectable()
export class WorktimeService {
  constructor(
    @InjectRepository(Worktime)
    private worktimeRepository: Repository<Worktime>,
    private connection: Connection,
  ) {}

  async create(createDto: any): Promise<any> {}

  async findAll() {
    return this.worktimeRepository.find();
  }

  getWorkTime(startDate: string, endDate: string) {
    return '';
  }

  async saveTime(workTime: Worktime) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const result = await queryRunner.manager.save(workTime);
      await queryRunner.commitTransaction();
      console.log('create workTime', result);
      return result;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
