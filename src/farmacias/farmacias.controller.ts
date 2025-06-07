import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FarmaciasService } from './farmacias.service';
import { CreateFarmaciaDto } from './dto/create-farmacia.dto';
import { UpdateFarmaciaDto } from './dto/update-farmacia.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Farmácias') //nome do grupo no swagger
@Controller('farmacias')
export class FarmaciasController {
  constructor(private readonly service: FarmaciasService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova farmácia' })//resumo da operação
  @ApiResponse({ status: 201, description: 'Farmácia criada com sucesso.' })//possivel resposta http
  @ApiResponse({ status: 400, description: 'Dados inválidos.' }) //resposta de erro
  create(@Body() dto: CreateFarmaciaDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as farmácias' })
  @ApiResponse({ status: 200, description: 'Lista de farmácias retornada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Nenhuma farmácia encontrada.' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar farmácia por ID' })
  @ApiParam({ name: 'id', description: 'ID da farmácia' })//parametro que sera passado na rota
  @ApiResponse({ status: 200, description: 'Farmácia encontrada.' })
  @ApiResponse({ status: 404, description: 'Farmácia não encontrada.' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Get('bairro/:bairro')
  @ApiOperation({ summary: 'Buscar farmácias por bairro' })
  @ApiParam({ name: 'bairro', description: 'Nome do bairro' })
  @ApiResponse({ status: 200, description: 'Lista de farmácias encontradas.' })
  @ApiResponse({ status: 404, description: 'Nenhuma farmácia encontrada para o bairro especificado.' })
  findByBairro(@Param('bairro') bairro: string) {
    return this.service.findByBairro(bairro);
  }

  @Get('cidade/:cidade')
  @ApiOperation({ summary: 'Buscar farmácias por cidade' })
  @ApiParam({ name: 'cidade', description: 'Nome da cidade' })
  @ApiResponse({ status: 200, description: 'Lista de farmácias encontradas.' })
  @ApiResponse({ status: 404, description: 'Nenhuma farmácia encontrada para a cidade especificada.' })
  findByCidade(@Param('cidade') cidade: string) {
    return this.service.findByCidade(cidade);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar farmácia' })
  @ApiParam({ name: 'id', description: 'ID da farmácia' })
  @ApiResponse({ status: 200, description: 'Farmácia atualizada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  update(@Param('id') id: string, @Body() dto: UpdateFarmaciaDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover farmácia' })
  @ApiParam({ name: 'id', description: 'ID da farmácia' })
  @ApiResponse({ status: 200, description: 'Farmácia removida com sucesso.' })
  @ApiResponse({ status: 404, description: 'Farmácia não encontrada.' })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}