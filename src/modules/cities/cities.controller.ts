import { Controller, Get, Param } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Get()
  findAll() {
    return this.citiesService.findAll();
  }

  @Get('uf/:uf')
  findByUf(@Param('uf') uf: string) {
    return this.citiesService.findOne({ where: { uf } });
  }

  @Get('name/:name')
  findByName(@Param('name') name: string) {
    return this.citiesService.findOne({ where: { name } });
  }
}
