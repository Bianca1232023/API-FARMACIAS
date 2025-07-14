import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ReceitaService } from './receita.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ParseIntPipe } from '@nestjs/common';
import { ExternalApiAuthGuard } from '../auth/external-api.guard';

@ApiTags('receitas')
@UseGuards(ExternalApiAuthGuard)
@ApiBearerAuth()
@Controller('receitas')

export class ReceitaController {
  constructor(private readonly service: ReceitaService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova receita' })
  @ApiResponse({ status: 201, description: 'Receita criada com sucesso.' })
  create(@Body() dto: CreateReceitaDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as receitas' })
  @ApiResponse({ status: 200, description: 'Lista de receitas retornada com sucesso.' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma receita pelo ID' })
  @ApiResponse({ status: 200, description: 'Receita encontrada.' })
  @ApiResponse({ status: 404, description: 'Receita não encontrada.' })
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza uma receita existente' })
  @ApiResponse({ status: 200, description: 'Receita atualizada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Receita não encontrada.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateReceitaDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma receita pelo ID' })
  @ApiResponse({ status: 200, description: 'Receita removida com sucesso.' })
  @ApiResponse({ status: 404, description: 'Receita não encontrada.' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }

  @Get(':id/validade')
  @ApiOperation({ summary: 'Verifica a validade da receita' })
  @ApiResponse({ status: 200, description: 'Status de validade retornado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Receita não encontrada.' })
  async verificarValidade(@Param('id', ParseIntPipe) id: number) {
    return this.service.verificarValidade(id);
  }
}