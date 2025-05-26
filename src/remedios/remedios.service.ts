import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
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

  update(id: number, dto: UpdateRemedioDto) {
    return this.remedioModel.update(dto, { where: { id } });
  }

  async remove(id: number) {
    const remedio = await this.findOne(id);
    if (remedio) await remedio.destroy();
    return { message: 'Remédio removido' };
  }
}
