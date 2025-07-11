//import { PartialType } from './node_modules/@nestjs/mapped-types';
import { PartialType } from '@nestjs/mapped-types';
import { CreateDoacaoRemedioDto } from './create-doacao-remedio.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateDoacaoRemedioDto extends PartialType(CreateDoacaoRemedioDto) {

    @ApiPropertyOptional({ example: 1, description: 'ID de doacaoRemedio' })
    @IsNumber()
    doacaoRemedioId: number;

    @ApiPropertyOptional({ example: 1, description: 'ID da solicitacao' })
    @IsNumber()
    solicitacaoId: number;
    @ApiPropertyOptional({ example: 1, description: 'ID do usuário (opcional na atualização)' })
    @IsOptional()
    @IsNumber()
    usuarioId?: number;

    @ApiPropertyOptional({ example: 1, description: 'ID do remédio (opcional na atualização)' })
    @IsOptional()
    @IsNumber()
    remedioId?: number;

    @ApiPropertyOptional({ example: 2, description: 'Quantidade do remédio (opcional na atualização)' })
    @IsOptional()
    @IsNumber()
    quantidade?: number;

    @ApiPropertyOptional({ example: '2025-06-01', description: 'Data da doação (opcional na atualização)' })
    @IsOptional()
    @IsDate()
    data_doacao?: Date;

    @ApiPropertyOptional({ example: '2025-07-01', description: 'Data fim do tratamento (opcional na atualização)' })
    @IsOptional()
    @IsDate()
    data_fim_tratamento?: Date;
}
