import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Estoque } from './estoque.model';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';

@Injectable()
export class EstoqueService {
  constructor(
    @InjectModel(Estoque)
    private readonly estoqueModel: typeof Estoque,
  ) {}
 
  create(createEstoqueDto: CreateEstoqueDto): Promise<Estoque> {
  return this.estoqueModel.create({
    farmaciaId: createEstoqueDto.farmaciaId,
    remedioId: createEstoqueDto.remedioId,
    quantidade_disponivel: createEstoqueDto.quantidade_disponivel,
  });
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

  remove(id: number) {
    return this.estoqueModel.destroy({ where: { id } });
  }
}
