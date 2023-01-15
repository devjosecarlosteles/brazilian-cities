import { Controller, Get, Param } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindOneCitiesListDto } from './dtos/findOneCityList.dto';

@Controller('cities')
@ApiTags('Cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Get('uf/:uf')
  @ApiResponse({ description: 'cities by uf', type: FindOneCitiesListDto })
  findByUf(@Param('uf') uf: string): FindOneCitiesListDto {
    const cities = this.citiesService.findOne({ where: { uf } });

    return { cities };
  }

  @Get('name/:name')
  @ApiResponse({
    description: 'cities by state name  ',
    type: FindOneCitiesListDto,
  })
  findByName(@Param('name') name: string): FindOneCitiesListDto {
    const cities = this.citiesService.findOne({ where: { name } });

    return { cities };
  }
}
