import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { HistoricoMedicamentoService } from './historico-medicamento.service';
import { CreateHistoricoDto } from './dto/create-historico.dto';


@Controller('historico')
export class HistoricoMedicamentoController {
  constructor(private readonly service: HistoricoMedicamentoService) {}

  @Post()
  create(@Body() dto: CreateHistoricoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Patch(':id/finalizar')
  finalizar(@Param('id') id: string) {
    return this.service.finalizarMedicamento(+id);
  }
}
