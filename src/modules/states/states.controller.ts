import { Controller, Get } from '@nestjs/common';
import { StatesService } from './states.service';
import { IStates } from '../../data/interfaces/IStates';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindAllStatesDto } from './dtos/findAllStates.dto';

@Controller('states')
@ApiTags('States')
export class StatesController {
  constructor(private statesService: StatesService) {}

  @Get()
  @ApiResponse({ type: FindAllStatesDto, description: 'states' })
  findAll(): FindAllStatesDto {
    const states = this.statesService.findAll();
    return { states };
  }
}
