import { Injectable } from '@nestjs/common';
import { IStates } from './interfaces/IStates';
import { cities } from '../../data/cities.js';

interface ICitiesServiceFindOneProps {
  where: {
    uf?: string;
    name?: string;
  };
}

@Injectable()
export class CitiesService {
  findAll() {
    return cities;
  }

  findOne({ where }: ICitiesServiceFindOneProps) {
    const { uf, name } = where;

    if (uf) {
      return cities.find(
        (state) => state.sigla.toLowerCase() === uf.toLowerCase(),
      );
    }

    if (name) {
      return cities.find(
        (state) => state.nome.toLowerCase() === name.toLowerCase(),
      );
    }

    throw new Error();
  }
}
