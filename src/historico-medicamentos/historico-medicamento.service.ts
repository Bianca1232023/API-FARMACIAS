import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HistoricoMedicamento } from './historico-medicamento.model';
import { CreateHistoricoDto } from './dto/create-historico.dto';


@Injectable()
export class HistoricoMedicamentoService {
  constructor(
    @InjectModel(HistoricoMedicamento)
    private historicoModel: typeof HistoricoMedicamento,
  ) {}

  async create(dto: CreateHistoricoDto) {
    const historicoAtivo = await this.historicoModel.findOne({
      where: {
        usuarioId: dto.usuarioId,
        medicamentoAcabou: false,
      },
    });

    if (historicoAtivo && !dto.justificativa) {
      throw new BadRequestException(
        'O usuário já possui um medicamento ativo. É necessário informar uma justificativa.',
      );
    }

    return await this.historicoModel.create({
        usuarioId: dto.usuarioId,
        medicamentoId: dto.medicamentoId,
        justificativa: dto.justificativa,
        dataRetirada: new Date(),
      });
  }

  async finalizarMedicamento(id: number) {
    const historico = await this.historicoModel.findByPk(id);
    if (!historico) {
      throw new BadRequestException('Histórico não encontrado');
    }

    historico.medicamentoAcabou = true;
    return historico.save();
  }


  findAll() {
    return this.historicoModel.findAll({ include: ['usuario', 'medicamento'] });
  }
}
