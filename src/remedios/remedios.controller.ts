import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common'; // <-- Adicione ParseIntPipe aqui
import { RemediosService } from './remedios.service';
import { CreateRemedioDto } from './dto/create-remedio.dto';
import { UpdateRemedioDto } from './dto/update-remedio.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('remedios')
@Controller('remedios')

export class RemediosController {
  constructor(private readonly remediosService: RemediosService) {}

  @Post()
  @ApiOperation({summary: 'cria novo remedio'})
  @ApiBody({ type: CreateRemedioDto})
  @ApiResponse({ status: 201, description: 'Remedio criado com sucesso'})
  @ApiResponse({ status: 400, description: 'dados invalidos'})
  create(@Body() dto: CreateRemedioDto) {
    return this.remediosService.create(dto);
  }

  @Get()
  @ApiOperation({summary: 'Listar todos os remedios criados'})
  @ApiResponse({ status: 201, description: 'Lista retornada com sucesso'})
  @ApiResponse({ status: 404, description: 'nenhum remedio encontrado'})
  findAll() {
    return this.remediosService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Listar um dos remedios criados'})
  @ApiParam({name: 'id', type: Number})
  @ApiResponse({ status: 201, description: 'Lista retornada com sucesso'})
  @ApiResponse({ status: 404, description: 'nenhum remedio encontrado'})
  findOne(@Param('id') id: string) {
    return this.remediosService.findOne(+id);
  }


  @Get('categoria/:categoria')
  @ApiOperation({summary: 'Listar uma categoria de remedios'})
  @ApiParam({name: 'categoria', type: String})
  @ApiResponse({ status: 201, description: 'categoria retornada com sucesso'})
  @ApiResponse({ status: 404, description: 'nenhuma categoria encontrada'})
  findByCategoria(@Param('categoria') categoria: string) {
    return this.remediosService.findByCategoria(categoria);
  }

  @Get('categorias')
  @ApiOperation({summary: 'Listar todas as categorias existentes'})
  @ApiResponse({ status: 201, description: 'Lista de todas as categorias retornada com sucesso'})
  @ApiResponse({ status: 404, description: 'nenhuma categoria encontrada'})
  listAllCategorias() {
    return this.remediosService.listAllCategorias();
  } 

  @Get('principio_ativo/:principio_ativo')
  @ApiOperation({summary: 'Lista o principio ativo do remedio'})
  @ApiParam({name: 'principio_ativo', type: String})
  @ApiResponse({ status: 201, description: 'principio ativo retornado com sucesso'})
  @ApiResponse({ status: 404, description: 'nenhuma categoria encontrada'})
  findByPrincipio_Ativo(@Param('principio_ativo') principio_ativo: string) {
    return this.remediosService.findByPrincipio_Ativo(principio_ativo);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar remédio por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateRemedioDto })
  @ApiResponse({ status: 200, description: 'Remedio atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Remedio não encontrado.' })
  updateAll(@Param('id') id: string,@Body() updateRemedioDto: UpdateRemedioDto) {
    return this.remediosService.updateAll(+id, updateRemedioDto);
  }

  @Put(':id/nome')
  @ApiOperation({ summary: 'Atualizar nome de remédio por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateRemedioDto })
  @ApiResponse({ status: 200, description: 'nome atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'nome não encontrado.' })
  replaceNome(@Param('id') id: string,@Body() body: { nome: string }) {
    return this.remediosService.replaceNome(+id, body.nome);
  }

  @Get('nome/:nome')
  @ApiOperation({summary: 'Listar nome do remedio'})
  @ApiParam({ name: 'nome', type: String })
  @ApiResponse({ status: 201, description: 'nome retornado com sucesso'})
  @ApiResponse({ status: 404, description: 'nenhum nome encontrado'})
  findByNome(@Param('nome') nome: string) {
    return this.remediosService.findByNome(nome);
  }


  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar parcialmente um remédio por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateRemedioDto })
  @ApiResponse({ status: 200, description: 'Remédio atualizado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Remédio não encontrado.' })
  update(@Param('id') id: string, @Body() updateRemedioDto: UpdateRemedioDto) {
    return this.remediosService.update(+id, updateRemedioDto);
  }

  @Patch(':id/atualizar-categoria')
  @ApiOperation({ summary: 'Atualizar categoria de um remédio por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Categoria atualizada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Remédio não encontrado.' })
  updateCategoria(@Param('id') id: string,@Body() body: { categoria: string }) {
    return this.remediosService.updateCategoria(+id, body.categoria); 
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um remédio por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Remédio removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Remédio não encontrado.' })
  remove(@Param('id') id: string) {
    return this.remediosService.remove(+id);
  }
}

@ApiTags('farmacias') 
@Controller('farmacias')
export class FarmaciaController {
  @Get()
  @ApiOperation({ summary: 'Lista todas as farmácias' })
  findAll() {
    return [];
  }
}


  @Get('dosagem/:dosagem')
  @ApiOperation({ summary: 'Listar remédios por dosagem' })
  @ApiParam({ name: 'dosagem', type: Number })
  @ApiResponse({ status: 200, description: 'Remédios com a dosagem retornados com sucesso.' })
  @ApiResponse({ status: 404, description: 'Nenhum remédio com essa dosagem encontrado.' })
  findByDosagem(@Param('dosagem') dosagem: number) {
  return this.remediosService.findByDosagem(dosagem);
  }

  @Get('fabricante/:fabricante')
  @ApiOperation({ summary: 'Listar remédios por fabricante' })
  @ApiParam({ name: 'fabricante', type: String })
  @ApiResponse({ status: 200, description: 'Remédios retornados com sucesso.' })
  @ApiResponse({ status: 404, description: 'Nenhum remédio encontrado com esse fabricante.' })
  findByFabricante(@Param('fabricante') fabricante: string) {
    return this.remediosService.findByFabricante(fabricante);
  }

  @Patch(':id/fabricante')
  @ApiOperation({ summary: 'Atualizar fabricante de um remédio por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ schema: { properties: { fabricante: { type: 'string' } } } })
  @ApiResponse({ status: 200, description: 'Fabricante atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Remédio não encontrado.' })
  updateFabricante(@Param('id', ParseIntPipe) id: number, @Body() body: { fabricante: string }) {
    return this.remediosService.updateFabricante(id, body.fabricante);
  }

}