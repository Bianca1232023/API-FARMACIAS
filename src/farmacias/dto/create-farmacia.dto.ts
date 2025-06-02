import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFarmaciaDto {
  @IsString()
  @IsNotEmpty()
  cep: string;

  @IsString()
  @IsNotEmpty()
  cidade: string;

  @IsString()
  @IsNotEmpty()
  bairro: string;

  @IsString()
  @IsNotEmpty()
  logradouro: string;

  @IsString()
  @IsNotEmpty()
  numero: number;
}
