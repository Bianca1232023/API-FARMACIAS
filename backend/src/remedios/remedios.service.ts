import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Remedio } from './remedios.model';
import { CreateRemedioDto } from './dto/create-remedio.dto';
import { UpdateRemedioDto } from './dto/update-remedio.dto';

@Injectable()
export class RemediosService {
  constructor(
    @InjectModel(Remedio)
    private remedioModel: typeof Remedio,
  ) {}

  async create(dto: CreateRemedioDto) {
    return await this.remedioModel.create({ ...dto });
  }

  async findAll() {
    return await this.remedioModel.findAll();
  }

  async findOne(id: number) {
    return await this.remedioModel.findByPk(id);
  }

  async findByPrincipio_Ativo(principio_ativo: string) {
    return await this.remedioModel.findAll({ where: { principio_ativo } });
  }

  async findByCategoria(categoria: string) {
    return await this.remedioModel.findAll({ where: { categoria } });
  }

  async listAllCategorias() {
    const remedios = await this.remedioModel.findAll();
    const categorias = remedios.map((r) => r.categoria);
    return Array.from(new Set(categorias));
  } //consertar

  async findByNome(nome: string) {
    return await this.remedioModel.findAll({ where: { nome } });
  }

  async findByDosagem(dosagem: string) {
    return await this.remedioModel.findAll({ where: { dosagem } });
  }

  async findByFabricante(fabricante: string) {
    return await this.remedioModel.findAll({ where: { fabricante } });
  }

  async update(id: number, dto: UpdateRemedioDto) {
    return await this.remedioModel.update(dto, { where: { remedioId: id } });
  }

  async updateCategoria(id: number, categoria: string) {
    const remedio = await this.findOne(id);
    if (!remedio) throw new NotFoundException('Remédio não encontrado');

    remedio.categoria = categoria;
    await remedio.save();
    return remedio;
  } //consertar

  async updateAll(id: number, dto: UpdateRemedioDto) {
    const remedio = await this.findOne(id);
    if (!remedio) throw new NotFoundException('Remédio não encontrado');

    await remedio.update(dto);
    return remedio;
  }

  async replaceNome(id: number, nome: string) {
    const remedio = await this.findOne(id);
    if (!remedio) throw new NotFoundException('Remédio não encontrado');

    remedio.nome = nome;
    await remedio.save();
    return remedio;
  }

  async remove(id: number) {
    const remedio = await this.findOne(id);
    if (!remedio) throw new NotFoundException('Remédio não encontrado');

    await remedio.destroy();
    return { message: 'Remédio removido' };
  }

  async updateFabricante(id: number, fabricante: string) {
    const remedio = await this.findOne(id);
    if (!remedio) {
      throw new NotFoundException('Remédio não encontrado');
    }

    remedio.fabricante = fabricante;
    await remedio.save();

    return remedio;
  }

  async updatePrincipioAtivo(id: string, principio_ativo: string) {
    const [updatedCount] = await this.remedioModel.update(
      { principio_ativo },
      { where: { id } },
    );

    if (updatedCount === 0) {
      throw new NotFoundException(
        'Remédio não encontrado ou princípio ativo igual ao atual.',
      );
    }

    return { message: 'Princípio ativo atualizado com sucesso' };
  }
}
