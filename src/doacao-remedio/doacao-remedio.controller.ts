import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DoacaoRemedioService } from './doacao-remedio.service';
import { CreateDoacaoRemedioDto } from './dto/create-doacao-remedio.dto';
import { UpdateDoacaoRemedioDto } from './dto/update-doacao-remedio.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('doacoes-remedios')
export class DoacaoRemedioController {
  constructor(private readonly service: DoacaoRemedioService) {}

  @Post()
  create(@Body() dto: CreateDoacaoRemedioDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Get('usuario/:usuarioId')
  findByUsuario(@Param('usuarioId') usuarioId: string) {
  return this.service.findByUsuarioId(+usuarioId);
  }


  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDoacaoRemedioDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
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
