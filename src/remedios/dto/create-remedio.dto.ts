import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateRemedioDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  quantidade: string;

  @IsString()
  @IsNotEmpty()
  principio_ativo: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsNumber()
  @IsNotEmpty()
  dosagem: number;

  @IsString()
  @IsNotEmpty()
  fabricante: string;

}


