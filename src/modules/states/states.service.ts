import { Injectable } from '@nestjs/common';
import { IStates } from '../../data/interfaces/IStates';
import { states } from '../../data/states';

@Injectable()
export class StatesService {
  findAll(): IStates[] {
    return states;
  }
}
