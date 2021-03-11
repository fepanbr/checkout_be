import { Injectable } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import { WorkTimeDto } from './dto/workTime.dto';

@Injectable()
export class WorktimeService {
  constructor() {}

  async create(createDto: any): Promise<any> {}

  async findAll() {}

  getWorkTime(): string {
    return 'getWork!';
  }

  saveTime(dto: WorkTimeDto) {
    return JSON.stringify(dto);
  }
}
