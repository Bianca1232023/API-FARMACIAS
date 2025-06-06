import { ApiProperty } from '@nestjs/swagger';

export class CreateFarmaciaDto {
  @ApiProperty()
  cep: string;

  @ApiProperty()
  cidade: string;

  @ApiProperty()
  bairro: string;

  @ApiProperty()
  logradouro: string;

  @ApiProperty()
  numero: number;
}
