import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Farmacia } from './farmacias.model';
import { CreateFarmaciaDto } from './dto/create-farmacia.dto';
import { UpdateFarmaciaDto } from './dto/update-farmacia.dto';
import { Op, fn, col, where } from 'sequelize';

@Injectable()
export class FarmaciasService {
  constructor(
    @InjectModel(Farmacia)
    private farmaciaModel: typeof Farmacia,
  ) {}

 async create(dto: CreateFarmaciaDto): Promise<Farmacia> {
    return await this.farmaciaModel.create({ ...dto });
  }

  async findAll(): Promise<Farmacia[]> {
    return await this.farmaciaModel.findAll();
  }

  async findOne(id: number): Promise<Farmacia | null> {
    return await this.farmaciaModel.findByPk(id);
  }

  async findByBairro(bairro: string): Promise<Farmacia[]> {
    return await this.farmaciaModel.findAll({
      where: where(
        fn('LOWER', col('bairro')),
        bairro.toLowerCase()
      )
    });
  }

  async findByCidade(cidade: string): Promise<Farmacia[]> {
    return await this.farmaciaModel.findAll({
      where: where(
        fn('LOWER', col('cidade')),
        cidade.toLowerCase()
      )
    });
  }

  async update(id: number, dto: UpdateFarmaciaDto): Promise<[number]> { //sequelize retorna array no update, por isso nao eh promise farmacia
   
    return await this.farmaciaModel.update(dto, { where: { farmaciaId: id } });
  }

  async remove(id: number): Promise<{ message: string }> {
    const farmacia = await this.farmaciaModel.findOne({ where: { farmaciaId: id } });
    if (farmacia) await farmacia.destroy();
    return { message: 'Farmácia removida' };
  }

}

