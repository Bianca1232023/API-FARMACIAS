import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSolicitacaoDto {
  @ApiProperty()
  @IsNumber()
  usuarioId: number;

  @ApiProperty()
  @IsNumber()
  medicamentoId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  justificativa: string;
}
