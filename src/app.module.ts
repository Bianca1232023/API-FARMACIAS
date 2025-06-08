import { Module } from '@nestjs/common';
import Sequelize from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Farmacia } from './farmacias/farmacias.model';
import { DoacaoRemedio } from './doacao-remedio/doacao-remedio.model';
import { DoacaoRemedioModule } from './doacao-remedio/doacao-remedio.module';
import { FarmaciasModule } from './farmacias/farmacias.module';
import { Usuario } from './usuarios/usuarios.model';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Remedio } from './remedios/remedios.model';
import { RemediosModule } from './remedios/remedios.module';
import { EstoqueModule } from './estoque/estoque.module';
import { Estoque } from './estoque/estoque.model';
import { Solicitacao } from './solicitacoes/solicitacao.model';
import { SolicitacoesModule } from './solicitacoes/solicitacao.module';
import { Receita } from './receita/receita.model';
import { ReceitaModule } from './receita/receita-module';

@Module({

  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      //host: 'bsi.cefet-rj.br',
      host: 'localhost',
      //port: 15432,
      port: 5432,
      //username: 'livialyrio',
      username: 'postgres',
      //password: '123456',
      password: 'root',
      database: 'db_farmaciasDigitaisSociais',
      models: [Farmacia, DoacaoRemedio, Usuario, Remedio, Estoque, Solicitacao, Receita],
      autoLoadModels: true,
      synchronize: true,
    }),
    FarmaciasModule, DoacaoRemedioModule, UsuariosModule, RemediosModule, EstoqueModule, SolicitacoesModule, ReceitaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}



