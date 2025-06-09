import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from './usuarios/usuarios.model';
import { Farmacia } from './farmacias/farmacias.model';
import { DoacaoRemedio } from './doacao-remedio/doacao-remedio.model';
import { Remedio } from './remedios/remedios.model';
import { FarmaciasModule } from './farmacias/farmacias.module';
import { DoacaoRemedioModule } from './doacao-remedio/doacao-remedio.module';
import { RemediosModule } from './remedios/remedios.module';
import { EstoqueModule } from './estoque/estoque.module';
import { Estoque } from './estoque/estoque.model';
import { Solicitacao } from './solicitacoes/solicitacao.model';
import { SolicitacoesModule } from './solicitacoes/solicitacao.module';
import { Receita } from './receita/receita.model';
import { ReceitaModule } from './receita/receita-module';

@Module({

  imports: [
    SequelizeModule.forRoot({// Configuração do Sequelize para conexão com o banco de dados
      dialect: 'postgres',
      //host: 'bsi.cefet-rj.br',//foi alterada para banco local pois o servidor do cefet caiu, impedindo a continuação do projeto
      host: 'localhost',
      //port: 15432,
      port: 5432,
      //username: 'livialyrio',
      username: 'postgres',
      //password: '123456',
      password: 'root',
      database: 'db_farmaciasDigitaisSociais',
      models: [Usuario, Estoque, Farmacia, DoacaoRemedio, Remedio, Receita, Solicitacao],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsuariosModule, EstoqueModule, FarmaciasModule, DoacaoRemedioModule, RemediosModule, ReceitaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
