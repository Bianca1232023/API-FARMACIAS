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

  findByDosagem(dosagem: number){
    return this.remedioModel.findAll({where: {dosagem}});
  }

  findByFabricante(fabricante: string){
    return this.remedioModel.findAll({where: {fabricante}})
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

  async updateFabricante(id: number, fabricante: string) {
  const remedio = await this.findOne(id);
  if (!remedio) {
    throw new NotFoundException('Remédio não encontrado');
  }

  remedio.fabricante = fabricante;
  await remedio.save();

  return remedio;
}


}
