import { PartialType } from '@nestjs/mapped-types';
import { CreateFarmaciaDto } from './create-farmacia.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateFarmaciaDto extends PartialType(CreateFarmaciaDto) {
  @ApiPropertyOptional({ example: 1, description: 'ID de farmácia' })
  @IsNumber()
  farmaciaId: number;

  @ApiPropertyOptional({ example: '22222-222', description: 'CEP da farmácia' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  cep?: string;

  @ApiPropertyOptional({
    example: 'Rio de Janeiro',
    description: 'cidade da farmácia',
  })
  @IsOptional()
  @IsNotEmpty()
  cidade?: string;

  @ApiPropertyOptional({
    example: 'Botafogo',
    description: 'Bairro da farmácia',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  bairro?: string;

  @ApiPropertyOptional({
    example: 'Rua das Flores',
    description: 'Logradouro da farmácia',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  logradouro?: string;

  @ApiPropertyOptional({ example: '123', description: 'Número da farmácia' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  numero?: number;
}
