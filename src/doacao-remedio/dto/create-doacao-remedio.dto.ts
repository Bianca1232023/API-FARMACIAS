import { ApiProperty } from '@nestjs/swagger';

export class CreateDoacaoRemedioDto {
  @ApiProperty()
  usuarioId: number;

  @ApiProperty()
  remedioId: number;

  @ApiProperty()
  quantidade: number;

  @ApiProperty({ type: Date })
  data_fim_tratamento: Date;
}
