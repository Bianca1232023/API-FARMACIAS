import { PartialType } from '@nestjs/mapped-types';
import { CreateEstoqueDto } from './create-estoque.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateEstoqueDto extends PartialType(CreateEstoqueDto) {
  @ApiPropertyOptional({ example: 1, description: 'Identificador da farmácia' })
  farmaciaId?: number;

  @ApiPropertyOptional({ example: 2, description: 'Identificador do remédio' })
  remedioId?: number;

  @ApiPropertyOptional({
    example: 100,
    description: 'Quantidade disponível em estoque',
  })
  quantidade_disponivel?: number;
}
