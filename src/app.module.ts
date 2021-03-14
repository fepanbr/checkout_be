import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorktimeModule } from './worktime/worktime.module';

@Module({
  imports: [WorktimeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
