import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { Estoque } from './estoque.model';
import { Op } from 'sequelize';

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

//regra de negocio: ao atualizar o estoque, se a quantidade disponível for menor ou igual a zero, o estoque deve ser removido
async update(id: number, updateDto: UpdateEstoqueDto): Promise<Estoque> {
    const estoque = await this.findOne(id);
    await estoque.update(updateDto);
    if (estoque.quantidade_disponivel <= 0) {
      await this.remove(estoque.estoqueId);
      throw new NotFoundException(`Estoque com ID ${id} foi removido pois a quantidade zerou.`);
    }
    return estoque;
  }

//regra de negocio: ao atualizar o estoque, se a quantidade disponível for menor ou igual a zero, o estoque deve ser removido
  async patch(id: number, dto: Partial<UpdateEstoqueDto>): Promise<Estoque> {
    const estoque = await this.findOne(id);
    await estoque.update(dto);
    if (estoque.quantidade_disponivel <= 0) {
      await this.remove(estoque.estoqueId);
      throw new NotFoundException(`Estoque com ID ${id} foi removido pois a quantidade zerou.`); 
    }
    return estoque;
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

  /*
   Regra de negócio: Uma farmácia só pode doar medicamentos que estejam em estoque.
   Regra de negócio: O medicamento doado deve ter quantidade suficiente em estoque para atender à solicitação.
   Regra de negócio: Após cada doação, o sistema deve atualizar automaticamente o estoque da farmácia.
   */
  async doarMedicamentoEstoque(farmaciaId: number, remedioId: number, quantidade: number) {
    const estoque = await this.estoqueModel.findOne({
      where: { farmaciaId, remedioId },
    });
    if (!estoque) {
      throw new BadRequestException('Não há estoque para esse medicamento na farmácia informada.');
    }
    if (estoque.quantidade_disponivel < quantidade) {
      throw new BadRequestException('Quantidade insuficiente em estoque para a doação.');
    }
    estoque.quantidade_disponivel -= quantidade;
    await estoque.save();
    return {
      message: 'Doação realizada com sucesso e estoque atualizado.',
      estoque,
    };
  }

  async verificarDisponibilidade(remedioId: number): Promise<boolean> {
    const remedio = await this.estoqueModel.findOne({
      where: { remedioId },
    });
    return !!remedio; // retorna true se encontrou, false caso contrário
  }

//regra de negocio para aviso de estoque baixo estoque baixo
 async findLowStock() {
  return await this.estoqueModel.findAll({//esse endpoint retorna todos os remédios com estoque baixo e posteriormente o aviso de fato será implementado com o front-end
    where: {
      quantidade_disponivel: { [Op.lte]: 3 },
    },
  });
}
}