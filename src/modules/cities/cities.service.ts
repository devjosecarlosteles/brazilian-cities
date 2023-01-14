import { Injectable } from '@nestjs/common';
import { IStates } from './interfaces/IStates';
import cities from '../../data/cities.json';

@Injectable()
export class CitiesService {
  findAll(): IStates[] {
    return cities;
  }
}
