import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { Estoque } from './estoque.model';

@Injectable()
export class EstoqueService {
  constructor(@InjectModel(Estoque) private estoqueModel: typeof Estoque) {}

  async create(dto: CreateEstoqueDto) {
    return await this.estoqueModel.create(dto as any);
  }

  async findAll() {
    return await this.estoqueModel.findAll();
  }

  async findOne(id: number) {
    const estoque = await this.estoqueModel.findByPk(id);
    if (!estoque) throw new NotFoundException('Estoque não encontrado');
    return estoque;
  }

  async update(id: number, dto: UpdateEstoqueDto) {
    const estoque = await this.findOne(id);
    return await estoque.update(dto);
  }

  async patch(id: number, dto: UpdateEstoqueDto) {
    return this.update(id, dto);
  }

  async remove(id: number) {
    const estoque = await this.findOne(id);
    await estoque.destroy();
    return { message: 'Estoque removido com sucesso' };
  }

  async findByFarmacia(farmaciaId: number) {
    return await this.estoqueModel.findAll({ where: { farmaciaId } });
  }

  async findByRemedio(remedioId: number) {
    return await this.estoqueModel.findAll({ where: { remedioId } });
  }
}