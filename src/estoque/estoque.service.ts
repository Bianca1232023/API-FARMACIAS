import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Estoque } from './estoque.model';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class EstoqueService {
  constructor(
    @InjectModel(Estoque) private estoqueModel: typeof Estoque) {}

  create(dto: CreationAttributes<Estoque>) {
    return this.estoqueModel.create(dto);
  }

  findAll() {
    return this.estoqueModel.findAll();
  }

  findOne(id: number) {
    return this.estoqueModel.findByPk(id);
  }

  update(id: number, dto: UpdateEstoqueDto) {
    return this.estoqueModel.update(dto, { where: { id } });
  }

  patch(id: number, dto: Partial<UpdateEstoqueDto>) {
    return this.estoqueModel.update(dto, { where: { id } });
  }

  remove(id: number) {
    return this.estoqueModel.destroy({ where: { id } });
  }

  findByFarmacia(farmaciaId: number) {
    return this.estoqueModel.findAll({ where: { farmaciaId } });
  }

  findByRemedio(remedioId: number) {
    return this.estoqueModel.findAll({ where: { remedioId } });
  }
}
