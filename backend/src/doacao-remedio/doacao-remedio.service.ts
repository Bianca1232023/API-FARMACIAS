import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DoacaoRemedio } from './doacao-remedio.model';
import { CreateDoacaoRemedioDto } from './dto/create-doacao-remedio.dto';
import { UpdateDoacaoRemedioDto } from './dto/update-doacao-remedio.dto';

@Injectable()
export class DoacaoRemedioService {
  constructor(
    @InjectModel(DoacaoRemedio)
    private readonly doacaoRemedioModel: typeof DoacaoRemedio,
  ) {}

  async create(dto: CreateDoacaoRemedioDto): Promise<DoacaoRemedio> {
    return await this.doacaoRemedioModel.create({ ...dto });
  }

  async findAll(): Promise<DoacaoRemedio[]> {
    return await this.doacaoRemedioModel.findAll();
  }

  async findOne(id: number): Promise<DoacaoRemedio> {
    const doacao = await this.doacaoRemedioModel.findByPk(id);
    if (!doacao) {
      throw new NotFoundException(`Doação com ID ${id} não encontrada`);
    }
    return doacao;
  }

  async findByUsuarioId(usuarioId: number): Promise<DoacaoRemedio[]> {
    return await this.doacaoRemedioModel.findAll({
      where: { usuarioId },
    });
  }

  async update(
    id: number,
    dto: UpdateDoacaoRemedioDto,
  ): Promise<DoacaoRemedio> {
    const doacao = await this.findOne(id);
    return await doacao.update(dto);
  }

  async patch(
    id: number,
    partialDto: Partial<UpdateDoacaoRemedioDto>,
  ): Promise<DoacaoRemedio> {
    const doacao = (await this.findOne(id)) as DoacaoRemedio;

    await doacao.update(partialDto);

    return doacao;
  }
  async remove(id: number): Promise<{ message: string }> {
    const doacao = await this.findOne(id);
    await doacao.destroy();
    return { message: `Doação com ID ${id} removida com sucesso` };
  }
}
