import { ApiProperty } from '@nestjs/swagger';
import { IStates } from '../../../data/interfaces/IStates';
import { IsArray } from 'class-validator';

export class FindAllStatesDto {
  @ApiProperty({
    description: 'state and cities of Brazil',
    example: [
      '...',
      {
        uf: 'AC',
        name: 'Acre',
        cities: [
          'Acrelândia',
          'Assis Brasil',
          'Brasiléia',
          'Bujari',
          'Capixaba',
          'Cruzeiro do Sul',
          'Epitaciolândia',
          'Feijó',
          'Jordão',
          'Mâncio Lima',
          'Manoel Urbano',
          'Marechal Thaumaturgo',
          'Plácido de Castro',
          'Porto Acre',
          'Porto Walter',
          'Rio Branco',
          'Rodrigues Alves',
          'Santa Rosa do Purus',
          'Sena Madureira',
          'Senador Guiomard',
          'Tarauacá',
          'Xapuri',
        ],
      },
      '...',
    ],
  })
  @IsArray()
  states: IStates[];
}
