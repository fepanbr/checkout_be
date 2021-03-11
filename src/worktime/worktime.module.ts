import { Module } from '@nestjs/common';
import { WorktimeController } from './worktime.controller';
import { WorktimeService } from './worktime.service';

@Module({
  controllers: [WorktimeController],
  providers: [WorktimeService],
  exports: [WorktimeService],
})
export class WorktimeModule {}
