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
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';
dotenv.config();
@Module({

  imports: [
        ConfigModule.forRoot({
      isGlobal: true,  // <-- torna o ConfigModule disponível globalmente
    }),
    SequelizeModule.forRoot({// Configuração do Sequelize para conexão com o banco de dados
      dialect: 'postgres',
      host: process.env.DB_HOST_FARMACIAS,
      port: 5432,
      username: 'postgres',
      password: process.env.DB_SENHA_FARMACIAS,
      database: process.env.DB_NAME_FARMACIAS,
      models: [Farmacia, DoacaoRemedio, Usuario, Remedio, Estoque, Solicitacao, Receita],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsuariosModule, EstoqueModule, FarmaciasModule, DoacaoRemedioModule, RemediosModule, ReceitaModule, Solicitacao
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
