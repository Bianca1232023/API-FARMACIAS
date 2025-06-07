import { ApiProperty } from '@nestjs/swagger';

export class CreateRemedioDto {
  @ApiProperty()
  nome: string;

  @ApiProperty()
  quantidade: string;

  @ApiProperty()
  principio_ativo: string;
}
