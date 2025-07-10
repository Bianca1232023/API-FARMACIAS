import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFarmaciaDto {
  @ApiProperty({ example: '22222-222', description: 'CEP da farmácia' })
  @IsString()
  @IsNotEmpty()
  cep: string;

  @ApiProperty({ example: 'Rio de Janeiro', description: 'cidade da farmácia' })
  @IsNotEmpty()
  cidade: string;

  @ApiProperty({ example: 'Botafogo', description: 'Bairro da farmácia' })
  @IsString()
  @IsNotEmpty()
  bairro: string;

  @ApiProperty({ example: 'Rua das Flores', description: 'Logradouro da farmácia' })
  @IsString()
  @IsNotEmpty()
  logradouro: string;

  @ApiProperty({ example: '123', description: 'Número da farmácia' })
  @IsString()
  @IsNotEmpty()
  numero: number;
}