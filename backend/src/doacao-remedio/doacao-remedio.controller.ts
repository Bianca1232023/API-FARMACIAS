import { Controller, Get, Post, Body, Param, Delete, Put, Patch, UseGuards } from '@nestjs/common';
import { DoacaoRemedioService } from './doacao-remedio.service';
import { CreateDoacaoRemedioDto } from './dto/create-doacao-remedio.dto';
import { UpdateDoacaoRemedioDto } from './dto/update-doacao-remedio.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { ExternalApiAuthGuard } from 'backend/src/auth/external-api.guard';

@ApiTags('Doações-Remédios') 
@Controller('doacoes-remedios')

export class DoacaoRemedioController {
  constructor(private readonly service: DoacaoRemedioService) {}

  @UseGuards(ExternalApiAuthGuard)
  @ApiBearerAuth()
  @Post()
  @ApiOperation({ summary: 'Criar uma nova doação de remédio' })
  @ApiBody({ type: CreateDoacaoRemedioDto })
  @ApiResponse({ status: 201, description: 'Doação criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() dto: CreateDoacaoRemedioDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as doações de remédios' })
  @ApiResponse({ status: 200, description: 'Lista de doações retornada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Nenhuma doação encontrada.' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar doação por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Doação encontrada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Doação não encontrada.' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Get('usuario/:usuarioId')
  @ApiOperation({ summary: 'Listar doações de um usuário' })
  @ApiParam({ name: 'usuarioId', type: Number })
  @ApiResponse({ status: 200, description: 'Doações do usuário retornadas com sucesso.' })
  @ApiResponse({ status: 404, description: 'Nenhuma doação encontrada para o usuário.' })
  findByUsuario(@Param('usuarioId') usuarioId: string) {
    return this.service.findByUsuarioId(+usuarioId);
  }


  @UseGuards(ExternalApiAuthGuard)
  @ApiBearerAuth()
  @Put(':id')
  @ApiOperation({ summary: 'Atualizar doação de remédio por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateDoacaoRemedioDto })
  @ApiResponse({ status: 200, description: 'Doação atualizada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Doação não encontrada.' })
  update(@Param('id') id: string, @Body() dto: UpdateDoacaoRemedioDto) {
    return this.service.update(+id, dto);
  }

    @UseGuards(ExternalApiAuthGuard)
  @ApiBearerAuth()
    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar doação' })
    @ApiParam({ name: 'id', description: 'ID da doação' })
    @ApiResponse({ status: 200, description: 'doação atualizada com sucesso.' })
    @ApiResponse({ status: 400, description: 'Dados inválidos.' })
    patch(@Param('id') id: string, @Body() dto: UpdateDoacaoRemedioDto) {
      return this.service.patch(+id, dto);
    }
  

     @UseGuards(ExternalApiAuthGuard)
  @ApiBearerAuth() 
  @Delete(':id')
  @ApiOperation({ summary: 'Remover doação por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Doação removida com sucesso.' })
  @ApiResponse({ status: 404, description: 'Doação não encontrada.' })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
@ApiTags('farmacias') // Categoria no Swagger
@Controller('farmacias')
export class FarmaciaController {
  @Get()
  @ApiOperation({ summary: 'Lista todas as farmácias' })
  findAll() {
    return [];
  }
}