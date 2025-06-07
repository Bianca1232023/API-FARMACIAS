import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Solicitacao } from './solicitacao.model';
import { SolicitacoesService } from './solicitacao.service';
import { SolicitacoesController } from './solicitacao.controller';

@Module({
  imports: [SequelizeModule.forFeature([Solicitacao])],
  controllers: [SolicitacoesController],
  providers: [SolicitacoesService],
   exports: [SolicitacoesService]
})
export class SolicitacoesModule {}
