import { Injectable } from '@nestjs/common';
import { states } from '../../data/states.js';

interface ICitiesServiceFindOneProps {
  where: {
    uf?: string;
    name?: string;
  };
}

@Injectable()
export class CitiesService {
  findOne({ where }: ICitiesServiceFindOneProps): string[] {
    const { uf, name } = where;

    if (uf) {
      return states.find((state) => state.uf.toLowerCase() === uf.toLowerCase())
        .cities;
    }

    if (name) {
      return states.find(
        (state) => state.name.toLowerCase() === name.toLowerCase(),
      ).cities;
    }

    throw new Error();
  }
}
