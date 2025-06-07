import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDoacaoRemedioDto {
  @ApiProperty({ example: 1, description: 'ID do usuário' })
  @IsNumber()
  usuarioId: number;

  @ApiProperty({ example: 1, description: 'ID do remédio' })
  @IsNumber()
  remedioId: number;

  @ApiProperty({ example: 2, description: 'Quantidade de unidades/caixas de remédio doadas' })
  @IsNumber()
  @IsNotEmpty()
  quantidade: number;

  @ApiProperty({ example: '2025-06-01', description: 'Data da doação' })
  @IsDate()
  @IsNotEmpty()
  data_doacao: Date;

  @ApiProperty({ example: '2025-07-01', description: 'Data fim do tratamento' })
  @ IsDate()
  @IsNotEmpty()
  data_fim_tratamento: Date;
}
