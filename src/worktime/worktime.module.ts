import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorktimeController } from './worktime.controller';
import { Worktime } from './worktime.entity';
import { WorktimeService } from './worktime.service';

@Module({
  controllers: [WorktimeController],
  providers: [WorktimeService],
  exports: [WorktimeService],
  imports: [TypeOrmModule.forFeature([Worktime])],
})
export class WorktimeModule {}
