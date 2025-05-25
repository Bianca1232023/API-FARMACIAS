import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FarmaciasService } from './farmacias.service';
import { CreateFarmaciaDto } from './dto/create-farmacia.dto';
import { UpdateFarmaciaDto } from './dto/update-farmacia.dto';

@Controller('farmacias')
export class FarmaciasController {
  constructor(private readonly service: FarmaciasService) {}

  @Post()
  create(@Body() dto: CreateFarmaciaDto) {
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

  @Get('bairro/:bairro')
  findByBairro(@Param('bairro') bairro: string) {
    return this.service.findByBairro(bairro);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateFarmaciaDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
