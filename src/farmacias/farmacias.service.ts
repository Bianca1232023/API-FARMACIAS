import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Farmacia } from './farmacias.model';
import { CreateFarmaciaDto } from './dto/create-farmacia.dto';
import { UpdateFarmaciaDto } from './dto/update-farmacia.dto';
import { Op, fn, col, where } from 'sequelize';
import { Estoque } from 'src/estoque/estoque.model';

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

 async update(id: number, updateDto: UpdateFarmaciaDto): Promise<Farmacia> {
    const farmacia = await this.findOne(id) as Farmacia;

    await farmacia.update(updateDto);

    return farmacia;
  }

  async patch(id: number, partialDto: Partial<UpdateFarmaciaDto>): Promise<Farmacia> {
    const farmacia = await this.findOne(id) as Farmacia;

    await farmacia.update(partialDto);

    return farmacia;
  }

  async remove(id: number): Promise<{ message: string }> {
    const farmacia = await this.farmaciaModel.findOne({ where: { farmaciaId: id } });
    if (farmacia) await farmacia.destroy();
    return { message: 'Farmácia removida' };
  }

  async findPharmaciesByRemedioId(remedioId: number): Promise<Farmacia[]> {
    const farmacias = await this.farmaciaModel.findAll({
      include: [{model: Estoque, as: 'estoques', required: true, 
        where: {remedioId: remedioId,quantidade_disponivel: {[Op.gt]: 0,},},
      }],

    });

    if (!farmacias || farmacias.length === 0) {
      throw new NotFoundException(`Nenhuma farmácia encontrada com o remédio ID ${remedioId} em estoque.`);
    }

    return farmacias;
  }


}

