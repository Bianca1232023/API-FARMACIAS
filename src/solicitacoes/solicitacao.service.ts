import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Solicitacao } from './solicitacao.model';


import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';

@Injectable()
export class SolicitacoesService {
  constructor(
    @InjectModel(Solicitacao)
    private solicitacaoModel: typeof Solicitacao
  ) {}

  async create(dto: CreateSolicitacaoDto): Promise<Solicitacao> {
    return this.solicitacaoModel.create(dto as any);
  }

  async findAll(): Promise<Solicitacao[]> {
    return this.solicitacaoModel.findAll();
  }

  async findById(id: number): Promise<Solicitacao> {
    const solicitacao = await this.solicitacaoModel.findByPk(id);
    if (!solicitacao) {
      throw new NotFoundException('Solicitação não encontrada');
    }
    return solicitacao;
  }

  async update(id: number, dto: UpdateSolicitacaoDto): Promise<Solicitacao> {
    const solicitacao = await this.findById(id);
    return solicitacao.update(dto);
  }

  async remove(id: number): Promise<void> {
    const solicitacao = await this.findById(id);
    await solicitacao.destroy();
  }
}
