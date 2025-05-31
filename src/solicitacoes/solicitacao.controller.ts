import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SolicitacoesService } from './solicitacao.service';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';

@Controller('solicitacoes')
export class SolicitacoesController {
  constructor(private readonly service: SolicitacoesService) {}

  @Post()
  create(@Body() dto: CreateSolicitacaoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.service.findById(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSolicitacaoDto) {
    return this.service.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id));
  }
}
