import { Body, Controller, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { WorkTimeDto } from './dto/workTime.dto';
import { Worktime } from './worktime.entity';
import { WorktimeService } from './worktime.service';

@Controller('worktime')
export class WorktimeController {
  constructor(private readonly workTimeService: WorktimeService) {}

  @Get()
  getWorkTime(@Param() startDate: string, @Param() endDate: string) {
    // return this.workTimeService.getWorkTime(startDate, endDate);
    return this.workTimeService.findAll();
  }

  @Post()
  async saveStartTime(@Body() createWorkTimeDto: Worktime) {
    return this.workTimeService.saveTime(createWorkTimeDto);
  }

  @Patch()
  async saveEndTime(@Body() createDto: WorkTimeDto) {}

  @Post()
  async saveWorkTime(@Body() createDto: WorkTimeDto) {
    console.log(this.workTimeService.create(createDto));
  }
}
