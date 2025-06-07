import {  Body,  Controller,  Delete,  Get,  Param,  Post,  Put,} from '@nestjs/common';
import { SolicitacoesService } from './solicitacao.service';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Patch, ParseIntPipe } from '@nestjs/common';


@ApiResponse({ status: 200, description: 'Solicitação aprovada com sucesso.' })
@ApiResponse({ status: 400, description: 'Estoque insuficiente.' })



@ApiTags('farmacias') 
@Controller('farmacias')
export class FarmaciaController {
  @Get()
  @ApiOperation({ summary: 'Lista todas as farmácias' })
  findAll() {
    return [];
  }
}

@ApiTags('HistoricoSolicitacao') //ENDPOINT HISTORICO DE SOLICITACAO
@Controller('solicitacoes')
export class SolicitacaoController {
  constructor(private readonly solicitacaoService: SolicitacoesService) {}

  @Get('historico')
  @ApiOperation({ summary: 'Listar histórico de todas as solicitações' })
  @ApiResponse({ status: 200, description: 'Histórico retornado com sucesso.' })
  async HistoricoSolicitacao() {
    return this.solicitacaoService.HistoricoSolicitacao();
  }

  @Patch(':id/aprovar') //APROVAR AS SOLICITACOES DE REMEDIO
  @ApiOperation({ summary: 'Aprovar solicitação' })
   async aprovarSolicitacao(@Param('id', ParseIntPipe) id: number) {
    return this.solicitacaoService.aprovarSolicitacao(id);
  
}
}

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
