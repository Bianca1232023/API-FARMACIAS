import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSolicitacaoDto {
  @ApiProperty({ example: 1, description: 'ID do usuário' })
  @IsNumber()
  usuarioId: number;

  @ApiProperty({ example: 2, description: 'ID do remédio' })
  @IsNumber()
  remedioId: number;

  @ApiProperty({ example: 1, description: 'ID da farmacia' })
  @IsNumber()
  farmaciaId: number;

  @ApiProperty({
    example: 'alguma coisa',
    description: 'Justificativa da solicitação',
  })
  @IsString()
  @IsNotEmpty()
  justificativa: string;
}
