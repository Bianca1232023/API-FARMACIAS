import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSolicitacaoDto {
  @ApiProperty()
  @IsNumber()
  usuarioId: number;

  @ApiProperty()
  @IsNumber()
  remedioId: number;

  @ApiProperty()
  @IsNumber()
  farmaciaid: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  justificativa: string;
}
