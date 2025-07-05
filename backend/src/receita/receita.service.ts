import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Receita } from './receita.model';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';

@Injectable()
export class ReceitaService {
  constructor(
    @InjectModel(Receita)
    private receitaModel: typeof Receita,
  ) {}

  async create(dto: CreateReceitaDto): Promise<Receita> {
    return this.receitaModel.create(dto as any);
  }

  async findAll(): Promise<Receita[]> {
    return this.receitaModel.findAll();
  }

  async findById(id: number): Promise<Receita> {
    const receita = await this.receitaModel.findByPk(id);
    if (!receita) throw new NotFoundException('Receita não encontrada');
    return receita;
  }

  async update(id: number, dto: UpdateReceitaDto): Promise<Receita> {
    const receita = await this.findById(id);
    return receita.update(dto);
  }

  async delete(id: number): Promise<void> {
    const receita = await this.findById(id);
    await receita.destroy();
  }

  async verificarValidade(
    id: number,
  ): Promise<{ validade: boolean; diasRestantes: number }> {
    const receita = await this.receitaModel.findByPk(id);

    if (!receita) {
      throw new NotFoundException('Receita não encontrada.');
    }

    const hoje = new Date();
    const dataCriacao = new Date(receita.dataReceita);
    const diasDeValidade = 30;

    const diferencaEmMilissegundos = hoje.getTime() - dataCriacao.getTime();
    const diasPassados = Math.floor(
      diferencaEmMilissegundos / (1000 * 60 * 60 * 24),
    );
    const diasRestantes = diasDeValidade - diasPassados;

    return {
      validade: diasRestantes > 0,
      diasRestantes: diasRestantes < 0 ? 0 : diasRestantes,
    };
  }
}
