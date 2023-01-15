import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export class FindOneCitiesListDto {
  @ApiProperty({
    description: 'cities by a specifc state of brazil',
    example: [
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
  })
  @IsArray()
  cities: string[];
}
