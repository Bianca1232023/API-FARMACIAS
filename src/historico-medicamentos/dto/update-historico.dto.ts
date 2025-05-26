import { IsOptional, IsNumber, IsString, IsBoolean } from 'class-validator';

export class UpdateHistoricoDto {
  @IsOptional()
  @IsNumber()
  usuarioId?: number;

  @IsOptional()
  @IsNumber()
  medicamentoId?: number;

  @IsOptional()
  @IsString()
  justificativa?: string;

  @IsOptional()
  @IsBoolean()
  medicamentoAcabou?: boolean;
}
