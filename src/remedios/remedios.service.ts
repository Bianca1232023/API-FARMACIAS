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

  create(dto: CreateRemedioDto) {
    return this.remedioModel.create({ ...dto });
  }

  findAll() {
    return this.remedioModel.findAll();
  }

  findOne(id: number) {
    return this.remedioModel.findByPk(id);
  }

  findByPrincipio_Ativo(principio_ativo: string) {
    return this.remedioModel.findAll({ where: { principio_ativo } });
  }

  findByCategoria(categoria: string) {
    return this.remedioModel.findAll({ where: { categoria } });
  }

  async listAllCategorias() {
    const remedios = await this.findAll();
    const categorias = remedios.map(r => r.categoria);
    return Array.from(new Set(categorias));
  }

  findByNome(nome: string) {
    return this.remedioModel.findAll({ where: { nome } });
  }

  async findExpiredRemedios() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.remedioModel.findAll({
      where: {
        validade: {
          [Op.lt]: today,
        },
      },
    });
  }

  async findExpiringRemedios(days: number) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const futureDate = new Date();
    futureDate.setDate(today.getDate() + days);
    futureDate.setHours(23, 59, 59, 999);

    return this.remedioModel.findAll({
      where: {
        validade: {
          [Op.between]: [today, futureDate],
        },
      },
    });
  }

  update(id: number, dto: UpdateRemedioDto) {
    return this.remedioModel.update(dto, { where: { id } });
  }

  async updateCategoria(id: number, categoria: string) {
    const remedio = await this.findOne(id);
    if (!remedio) throw new NotFoundException('Remédio não encontrado');

    remedio.categoria = categoria;
    await remedio.save();
    return remedio;
  }

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

  async removeExpiredRemedios() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const expired = await this.remedioModel.findAll({
      where: {
        validade: {
          [Op.lt]: today,
        },
      },
    });

    const count = expired.length;

    for (const remedio of expired) {
      await remedio.destroy();
    }

    return { message: `${count} remédio(s) vencido(s) removido(s)` };
  }

  async getAllOrderedByValidade() {
    return this.remedioModel.findAll({
      order: [['validade', 'ASC']],
    });
  }
}
