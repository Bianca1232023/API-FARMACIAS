import { ApiProperty } from '@nestjs/swagger';
import {IsString, IsEmail, IsBoolean, IsOptional, IsDateString, IsNumber} from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty({ example: 'Joao' })
  @IsString()
  nome: string;

  @ApiProperty({ example: '12345678900' })
  @IsString()
  cpf: string;

  @ApiProperty({ required: false})
  @IsOptional()
  @IsDateString()
  dataNascimento?: Date; 

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
