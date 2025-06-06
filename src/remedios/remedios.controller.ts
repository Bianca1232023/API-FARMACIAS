import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RemediosService } from './remedios.service';
import { CreateRemedioDto } from './dto/create-remedio.dto';
import { UpdateRemedioDto } from './dto/update-remedio.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('remedios')
export class RemediosController {
  constructor(private readonly remediosService: RemediosService) {}

  @Post()
  create(@Body() dto: CreateRemedioDto) {
    return this.remediosService.create(dto);
  }

  @Get()
  findAll() {
    return this.remediosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.remediosService.findOne(+id);
  }

  @Get('principio_ativo/:principio_ativo')
  findByPrincipio_Ativo(@Param('principio_ativo') principio_ativo: string) {
    return this.remediosService.findByPrincipio_Ativo(principio_ativo);
  } //Coloquei um GET de princípio ativo, pois existem remédios genéricos que possuem os mesmos princípios ativos.

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRemedioDto: UpdateRemedioDto) {
    return this.remediosService.update(+id, updateRemedioDto);
  }

  @Delete(':id')
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
