import { Controller, Get, Post, Body, Param, Put, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { Estoque } from './estoque.model';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('estoque')
@Controller('estoque')
export class EstoqueController {
  constructor(private readonly service: EstoqueService) {}

  @Get('aviso')
  @ApiOperation({ summary: 'Lista remédios com estoque baixo (<= 3)' })
  @ApiResponse({ status: 200, description: 'Lista de remédios com estoque baixo.' })
  @ApiResponse({ status: 204, description: 'Não tem nennhum remédio com estoque baixo.' })
  async findLowStock() {
    return this.service.findLowStock();
  }

  @Post()
  @ApiOperation({ summary: 'criar um novo item de estoque' })
  @ApiResponse({ status: 201, description: 'estoque criado com sucesso.', type: Estoque })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiBody({ type: CreateEstoqueDto })
  create(@Body() createDto: CreateEstoqueDto) {
    return this.service.create(createDto as any);
  }

  @Get()
  @ApiOperation({ summary: 'retorna todos os estoques' })
  @ApiResponse({ status: 200, description: 'Lista de estoque retornada com sucesso.', type: [Estoque] })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'retorna estoque por id' })
  @ApiResponse({ status: 200, description: 'Estoque encontrado.', type: Estoque })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

@Put(':id')
@ApiOperation({ summary: 'Atualiza item de estoque por completo PUT' })
@ApiResponse({ status: 200, description: 'Estoque atualizado com sucesso.', type: Estoque })
@ApiResponse({ status: 400, description: 'Dados inválidos.' })
@ApiResponse({ status: 404, description: 'Estoque não encontrado ou removido pois a quantidade zerou.' })
@ApiParam({ name: 'id', type: Number })
@ApiBody({ type: UpdateEstoqueDto })
async update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateEstoqueDto) {
  return await this.service.update(id, updateDto);
}

@Patch(':id')
@ApiOperation({ summary: 'Atualiza parcialmente um estoque com patch' })
@ApiResponse({ status: 200, description: 'Estoque atualizado parcialmente com sucesso.', type: Estoque })
@ApiResponse({ status: 400, description: 'Dados inválidos.' })
@ApiResponse({ status: 404, description: 'Estoque não encontrado ou removido pois a quantidade zerou.' })
@ApiParam({ name: 'id', type: Number })
@ApiBody({ type: UpdateEstoqueDto })
async patch(@Param('id', ParseIntPipe) id: number, @Body() dto: Partial<UpdateEstoqueDto>) {
  return await this.service.patch(id, dto);
}
    
  @Delete(':id')
  @ApiOperation({ summary: 'remove um estoque' })
  @ApiResponse({ status: 204, description: 'estoque removido com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }

  @Get('/farmacia/:farmaciaId')
  @ApiOperation({ summary: 'Retorna estoque por farmácia' })
  @ApiResponse({ status: 200, description: 'estoque da farmácia encontrados.', type: [Estoque] })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiParam({ name: 'farmaciaId', type: Number })
  findByFarmacia(@Param('farmaciaId') farmaciaId: string) {
    return this.service.findByFarmacia(+farmaciaId);
  }

  @Get('/remedio/:remedioId')
  @ApiOperation({ summary: 'Retorna estoque por remedio' })
  @ApiResponse({ status: 200, description: 'estoque de remedios encontrados.', type: [Estoque] })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiParam({ name: 'remedioId', type: Number })
  findByRemedio(@Param('remedioId') remedioId: string) {
    return this.service.findByRemedio(+remedioId);
  }


  @Get(':remedioId/disponivel')
  @ApiOperation({ summary: 'Verificar se um remédio está disponível no estoque' })
  @ApiResponse({ status: 200, description: 'Disponibilidade do remédio verificada com sucesso.', type: Boolean })
  @ApiResponse({ status: 400, description: 'Ocorreu um erro na requisição' })
  @ApiParam({ name: 'remedioId', type: Number })
  async verificarDisponibilidade(
    @Param('remedioId', ParseIntPipe) remedioId: number,
  ): Promise<{ disponivel: boolean }> {
    const disponivel = await this.service.verificarDisponibilidade(remedioId);
    return { disponivel };
  }


}