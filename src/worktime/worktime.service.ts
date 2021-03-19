import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkTimeDto } from './dto/workTime.dto';
import { Worktime } from './worktime.entity';

@Injectable()
export class WorktimeService {
  constructor(
    @InjectRepository(Worktime)
    private worktimeRepository: Repository<Worktime>,
  ) {}

  async create(createDto: any): Promise<any> {}

  async findAll() {
    return this.worktimeRepository.find();
  }

  getWorkTime(startDate: string, endDate: string) {
    return '';
  }

  saveTime(dto: WorkTimeDto) {
    return JSON.stringify(dto);
  }
}
