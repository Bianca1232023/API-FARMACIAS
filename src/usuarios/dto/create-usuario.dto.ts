import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsBoolean,
  IsOptional,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty({ example: 'Joao' })
  @IsString()
  nome: string;

  @ApiProperty({ example: '123.456.789-00' })
  @IsString()
  cpf: string;

  @ApiProperty({ required: false })
  dataNascimento?: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  @ApiProperty({ example: 'joao@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  funcionario: boolean;

  @ApiProperty({ required: false, example: 1 })
  @IsOptional()
  @IsNumber()
  farmaciaId?: number;
}
