import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { WorktimeController } from './worktime/worktime.controller';
import { WorktimeModule } from './worktime/worktime.module';

@Module({
  imports: [WorktimeModule],
  controllers: [AppController, UserController, WorktimeController],
  providers: [AppService],
})
export class AppModule {}
