import { Body, Controller, Get, Patch, Post, Res } from '@nestjs/common';
import { WorkTimeDto } from './dto/workTime.dto';
import { WorktimeService } from './worktime.service';

@Controller('worktime')
export class WorktimeController {
  constructor(private workTimeService: WorktimeService) {}

  @Get()
  getWorkTime(@Res() res) {
    return this.workTimeService.getWorkTime();
  }

  @Post()
  async saveStartTime(@Body() createWorkTimeDto: WorkTimeDto) {
    return this.workTimeService.saveTime(createWorkTimeDto);
  }

  @Patch()
  async saveEndTime(@Body() createDto: WorkTimeDto) {}

  @Post()
  async saveWorkTime(@Body() createDto: WorkTimeDto) {
    console.log(this.workTimeService.create(createDto));
  }
}
