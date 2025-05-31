import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSolicitacaoDto {
  @IsNumber()
  usuarioId: number;

  @IsNumber()
  medicamentoId: number;

  @IsString()
  @IsNotEmpty()
  justificativa: string;
}
