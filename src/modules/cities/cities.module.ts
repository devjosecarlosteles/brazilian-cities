import { Module } from '@nestjs/common';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

@Module({
  imports: [],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
