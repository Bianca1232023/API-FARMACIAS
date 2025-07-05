import { IsString, IsOptional, IsInt } from 'class-validator';

export class UpdateReceitaDto {
  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsInt()
  solicitacaoId?: number;
}
