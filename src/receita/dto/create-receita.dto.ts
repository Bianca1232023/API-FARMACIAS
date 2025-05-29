import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateReceitaDto {
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsInt()
  solicitacaoId: number;
}
