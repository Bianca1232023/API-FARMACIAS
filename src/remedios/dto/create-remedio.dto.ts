import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateRemedioDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  principio_ativo: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsNumber()
  @IsNotEmpty()
  dosagem: string;

  @IsString()
  @IsNotEmpty()
  fabricante: string;

}


