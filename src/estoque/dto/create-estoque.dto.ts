import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';

export class CreateEstoqueDto {
  @IsInt()
  @ApiProperty({ example: 1, description: 'Identificador da farmácia' })
  farmaciaId: number;

  @IsInt()
  @ApiProperty({ example: 2, description: 'Identificador do remédio' })
  remedioId: number;

  @IsInt()
  @Min(0)
  @ApiProperty({ example: 100, description: 'Quantidade disponível em estoque' })
  quantidade_disponivel: number;
}
