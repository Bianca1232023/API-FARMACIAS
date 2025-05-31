import { IsOptional, IsString } from 'class-validator';

export class UpdateSolicitacaoDto {
  @IsOptional()
  @IsString()
  justificativa?: string;

  @IsOptional()
  @IsString()
  status?: 'pendente' | 'aprovada' | 'recusada';
}
