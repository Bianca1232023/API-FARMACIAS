// src/farmacias/historico-medicamentos/historico-medicamento.module.ts

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HistoricoMedicamento } from './historico-medicamento.model';
import { HistoricoMedicamentoService } from './historico-medicamento.service';
import { HistoricoMedicamentoController } from './historico-medicamento.controller';

@Module({
  imports: [SequelizeModule.forFeature([HistoricoMedicamento])],
  controllers: [HistoricoMedicamentoController],
  providers: [HistoricoMedicamentoService],
  exports: [HistoricoMedicamentoService],
})
export class HistoricoMedicamentoModule {}
