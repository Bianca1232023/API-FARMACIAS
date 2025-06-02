import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDoacaoRemedioDto {
  @IsNumber()
  usuarioId: number;

  @IsNumber()
  remedioId: number;

  @IsNumber()
  @IsNotEmpty()
  quantidade: number;

  @IsNotEmpty()
  data_doacao: Date;

  @IsNotEmpty()
  data_fim_tratamento: Date;
}
