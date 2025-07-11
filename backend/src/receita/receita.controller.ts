import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ReceitaService } from './receita.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ParseIntPipe } from '@nestjs/common';
import { ExternalApiAuthGuard } from '../auth/external-api.guard';

@Controller('receitas')
export class ReceitaController {
  ReceitaService: any;
  constructor(private readonly service: ReceitaService) {}

  @UseGuards(ExternalApiAuthGuard)
  @ApiBearerAuth()
  @Post()
  create(@Body() dto: CreateReceitaDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.service.findById(id);
  }

    @UseGuards(ExternalApiAuthGuard)
  @ApiBearerAuth()
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateReceitaDto) {
    return this.service.update(id, dto);
  }

    @UseGuards(ExternalApiAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @Get(':id/validade')
  @ApiOperation({ summary: 'Verifica a validade da receita' })
  @ApiResponse({ status: 200, description: 'Status de validade retornado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Receita não encontrada.' })
  async verificarValidade(@Param('id', ParseIntPipe) id: number) {
    return this.ReceitaService.verificarValidade(id);
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