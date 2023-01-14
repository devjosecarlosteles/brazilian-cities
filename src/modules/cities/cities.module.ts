import { Module } from '@nestjs/common';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

@Module({
  imports: [],
  providers: [CitiesService],
  controllers: [CitiesController],
})
export class CitiesModule {}
