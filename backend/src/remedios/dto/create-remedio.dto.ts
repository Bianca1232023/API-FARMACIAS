import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class CreateRemedioDto {
  @ApiProperty({ example: 'puran', description: 'nome do remedio' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    example: 'levotiroxina',
    description: 'principio ativo do remedio',
  })
  @IsString()
  @IsNotEmpty()
  principio_ativo: string;

  @ApiProperty({
    example: 'hormonio tireoidiano',
    description: 'categoria do remedio',
  })
  @IsString()
  @IsNotEmpty()
  categoria: string;

  @ApiProperty({
    example: '25 mg',
    description: 'unidade de medida do principio ativo',
  })
  @IsNumber()
  @IsNotEmpty()
  dosagem: string;

  @ApiProperty({ example: 'sanofi', description: 'fabricante do remedio' })
  @IsString()
  @IsNotEmpty()
  fabricante: string;
}
