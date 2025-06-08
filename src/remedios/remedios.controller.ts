import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put, UseGuards } from '@nestjs/common'; 
import { RemediosService } from './remedios.service';
import { CreateRemedioDto } from './dto/create-remedio.dto';
import { UpdateRemedioDto } from './dto/update-remedio.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('remedios')
@Controller('remedios')

export class RemediosController {
  constructor(private readonly remediosService: RemediosService) {}

  @UseGuards(AuthGuard)
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
  @ApiOperation({summary: 'Lista remedios com o principio ativo escrito'})
  @ApiParam({name: 'principio_ativo', type: String})
  @ApiResponse({ status: 201, description: 'principio ativo retornado com sucesso'})
  @ApiResponse({ status: 404, description: 'nenhuma categoria encontrada'})
  findByPrincipio_Ativo(@Param('principio_ativo') principio_ativo: string) {
    return this.remediosService.findByPrincipio_Ativo(principio_ativo);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'Atualizar remédio por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateRemedioDto })
  @ApiResponse({ status: 200, description: 'Remedio atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Remedio não encontrado.' })
  updateAll(@Param('id') id: string,@Body() updateRemedioDto: UpdateRemedioDto) {
    return this.remediosService.updateAll(+id, updateRemedioDto);
  }

  @UseGuards(AuthGuard)
  @Patch(':id/principio_ativo')
  @ApiOperation({ summary: 'Atualizar princípio ativo de um remédio por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ schema: { properties: { principio_ativo: { type: 'string' } } } })
  @ApiResponse({ status: 200, description: 'Princípio ativo atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Remédio não encontrado.' })
  updatePrincipioAtivo(@Param('id') id: string, @Body() body: { principio_ativo: string }) {
    return this.remediosService.updatePrincipioAtivo(id, body.principio_ativo);
  }

  @Get('nome/:nome')
  @ApiOperation({summary: 'Listar nome do remedio'})
  @ApiParam({ name: 'nome', type: String })
  @ApiResponse({ status: 201, description: 'nome retornado com sucesso'})
  @ApiResponse({ status: 404, description: 'nenhum nome encontrado'})
  findByNome(@Param('nome') nome: string) {
    return this.remediosService.findByNome(nome);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar parcialmente um remédio por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateRemedioDto })
  @ApiResponse({ status: 200, description: 'Remédio atualizado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Remédio não encontrado.' })
  update(@Param('id') id: string, @Body() updateRemedioDto: UpdateRemedioDto) {
    return this.remediosService.update(+id, updateRemedioDto);
  }

  @UseGuards(AuthGuard)
  @Patch(':id/atualizar-categoria')
  @ApiOperation({ summary: 'Atualizar categoria de um remédio por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Categoria atualizada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Remédio não encontrado.' })
  updateCategoria(@Param('id') id: string,@Body() body: { categoria: string }) {
    return this.remediosService.updateCategoria(+id, body.categoria); 
  }

  @UseGuards(AuthGuard)
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


  /*@Get('dosagem/:dosagem')
  @ApiOperation({ summary: 'Listar remédios por dosagem' })
  @ApiParam({ name: 'dosagem', type: String })
  @ApiResponse({ status: 200, description: 'Remédios com a dosagem retornados com sucesso.' })
  @ApiResponse({ status: 404, description: 'Nenhum remédio com essa dosagem encontrado.' })
  findByDosagem(@Param('dosagem') dosagem: string) {
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

  @UseGuards(AuthGuard)
  @Patch(':id/fabricante')
  @ApiOperation({ summary: 'Atualizar fabricante de um remédio por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ schema: { properties: { fabricante: { type: 'string' } } } })
  @ApiResponse({ status: 200, description: 'Fabricante atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Remédio não encontrado.' })
  updateFabricante(@Param('id', ParseIntPipe) id: number, @Body() body: { fabricante: string }) {
    return this.remediosService.updateFabricante(id, body.fabricante);
  }

}*/