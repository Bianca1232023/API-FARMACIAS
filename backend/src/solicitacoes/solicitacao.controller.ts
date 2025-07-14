import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { SolicitacoesService } from './solicitacao.service';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { ExternalApiAuthGuard } from '../auth/external-api.guard';

@ApiTags('farmacias')
@Controller('farmacias')
export class FarmaciaController {
  @Get()
  @ApiOperation({ summary: 'Lista todas as farmácias' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso.' })
  findAll() {
    return [];
  }
}

@ApiTags('HistoricoSolicitacao')
@Controller('solicitacoes')
export class SolicitacaoController {
  constructor(private readonly solicitacaoService: SolicitacoesService) {}

  @Get('historico')
  @ApiOperation({ summary: 'Listar histórico de todas as solicitações' })
  @ApiResponse({ status: 200, description: 'Histórico retornado com sucesso.' })
  async HistoricoSolicitacao() {
    return this.solicitacaoService.HistoricoSolicitacao();
  }
}

@ApiTags('Solicitacoes')
@UseGuards(ExternalApiAuthGuard)
@ApiBearerAuth()
@Controller('solicitacoes')
export class SolicitacoesController {
  constructor(private readonly service: SolicitacoesService) {}


  @Post()
  @ApiOperation({ summary: 'Criar nova solicitação' })
  @ApiBody({ type: CreateSolicitacaoDto })
  @ApiResponse({ status: 201, description: 'Solicitação criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() dto: CreateSolicitacaoDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as solicitações' })
  @ApiResponse({ status: 200, description: 'Lista de solicitações retornada com sucesso.' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar solicitação por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Solicitação encontrada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Solicitação não encontrada.' })
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar solicitação por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateSolicitacaoDto })
  @ApiResponse({ status: 200, description: 'Solicitação atualizada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Solicitação não encontrada.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateSolicitacaoDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover solicitação por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Solicitação removida com sucesso.' })
  @ApiResponse({ status: 404, description: 'Solicitação não encontrada.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
