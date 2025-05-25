import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Farmacia } from './farmacias.model';
import { CreateFarmaciaDto } from './dto/create-farmacia.dto';
import { UpdateFarmaciaDto } from './dto/update-farmacia.dto';

@Injectable()
export class FarmaciasService {
  constructor(
    @InjectModel(Farmacia)
    private farmaciaModel: typeof Farmacia,
  ) {}

  create(dto: CreateFarmaciaDto) {
  return this.farmaciaModel.create({ ...dto });
}


  findAll() {
    return this.farmaciaModel.findAll();
  }

  findOne(id: number) {
    return this.farmaciaModel.findByPk(id);
  }

  findByBairro(bairro: string) {
    return this.farmaciaModel.findAll({ where: { bairro } });
  }

  update(id: number, dto: UpdateFarmaciaDto) {
    return this.farmaciaModel.update(dto, { where: { id } });
  }

  async remove(id: number) {
    const farmacia = await this.findOne(id);
    if (farmacia) await farmacia.destroy();
    return { message: 'Farmácia removida' };
  }
}

