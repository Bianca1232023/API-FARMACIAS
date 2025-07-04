import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Solicitacao } from './solicitacao.model';
import { SolicitacoesService } from './solicitacao.service';
import { SolicitacoesController } from './solicitacao.controller';
import { Remedio } from '../remedios/remedios.model';
import { Farmacia } from 'src/farmacias/farmacias.model';

@Module({
  imports: [SequelizeModule.forFeature([Solicitacao, Remedio, Farmacia])],
  controllers: [SolicitacoesController],
  providers: [SolicitacoesService, Remedio],
  exports: [SolicitacoesService],
})
export class SolicitacoesModule {}
