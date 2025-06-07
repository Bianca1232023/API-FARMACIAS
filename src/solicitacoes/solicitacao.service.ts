import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Solicitacao } from './solicitacao.model';
import { Remedio } from '../remedios/remedios.model'

import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';

@Injectable()
export class SolicitacoesService {
  constructor(
    @InjectModel(Solicitacao)
    private solicitacaoModel: typeof Solicitacao,
    @InjectModel(Remedio) private readonly remedioModel: typeof Remedio,
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

 async HistoricoSolicitacao(): Promise<Solicitacao[]> { //ENDPOINT DO HISTORICO DE SOLICITACAO
    return this.solicitacaoModel.findAll({
      order: [['dataCriacao', 'DESC']],
    });
  }

  async aprovarSolicitacao(id: number) { //ENDPOINT PARA APROVAR SOLICITACAO DE REMEDIO
  const solicitacao = await this.solicitacaoModel.findByPk(id);
  if (!solicitacao) {
    throw new NotFoundException('Solicitação não encontrada.');
  }

  const remedio = await this.remedioModel.findByPk(solicitacao.remedioId);
  if (!remedio) {
    throw new NotFoundException('Remédio não encontrado.');
  }
/*
  if (remedio.quantidade < 1) {
    throw new BadRequestException('Estoque insuficiente para aprovar a solicitação.');
  }

  // Atualizar o status da solicitação
  solicitacao.status = 'aprovada';
  await solicitacao.save();

  // Atualizar o estoque do remédio
  remedio.quantidade -= 1;
  await remedio.save();

  return {
    message: 'Solicitação aprovada com sucesso.',
    solicitacao,
  };
 */ 
}

}
