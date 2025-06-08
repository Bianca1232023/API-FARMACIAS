import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DoacaoRemedioService } from './doacao-remedio.service';
import { DoacaoRemedioController } from './doacao-remedio.controller';
import { DoacaoRemedio } from './doacao-remedio.model';
import { Estoque } from 'src/estoque/estoque.model';
import { Solicitacao } from 'src/solicitacoes/solicitacao.model';
@Module({
  imports: [ SequelizeModule.forFeature([DoacaoRemedio, Estoque, Solicitacao]),
  ],
  exports: [DoacaoRemedioService],
  controllers: [DoacaoRemedioController],
  providers: [DoacaoRemedioService],
})
export class DoacaoRemedioModule {}
