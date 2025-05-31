import {Controller, Get, Post, Body, Param, Put, Patch, Delete } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { CreationAttributes } from 'sequelize';
import { Estoque } from './estoque.model';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly service: EstoqueService) {}
  
  @Post()
  create(@Body() dto: CreationAttributes<Estoque>) {
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

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEstoqueDto) {
    return this.service.update(+id, dto);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() dto: Partial<UpdateEstoqueDto>) {
    return this.service.patch(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }

  @Get('/farmacia/:farmaciaId')
  findByFarmacia(@Param('farmaciaId') farmaciaId: string) {
    return this.service.findByFarmacia(+farmaciaId);
  }

  @Get('/remedio/:remedioId')
  findByRemedio(@Param('remedioId') remedioId: string) {
    return this.service.findByRemedio(+remedioId);
  }
}
