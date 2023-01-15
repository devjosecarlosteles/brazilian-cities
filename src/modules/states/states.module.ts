import { Module } from '@nestjs/common';
import { StatesController } from './states.controller';
import { StatesService } from './states.service';

@Module({
  imports: [],
  controllers: [StatesController],
  providers: [StatesService],
})
export class StatesModule {}
