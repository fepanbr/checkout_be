import { Injectable } from '@nestjs/common';
import { WorkTimeDto } from './dto/workTime.dto';

@Injectable()
export class WorktimeService {
  constructor() {}

  async create(createDto: any): Promise<any> {}

  async findAll() {}

  getWorkTime(startDate: string, endDate: string) {
    return '';
  }

  saveTime(dto: WorkTimeDto) {
    return JSON.stringify(dto);
  }
}
