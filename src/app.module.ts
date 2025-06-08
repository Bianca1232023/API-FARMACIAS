import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { Farmacia } from './farmacias/farmacias.model';
import { DoacaoRemedio } from './doacao-remedio/doacao-remedio.model';
import { DoacaoRemedioModule } from './doacao-remedio/doacao-remedio.module';
import { FarmaciasModule } from './farmacias/farmacias.module';
import { Usuario } from './usuarios/usuarios.model';
=======
>>>>>>> origin/MariaGeral
import { UsuariosModule } from './usuarios/usuarios.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from './usuarios/usuarios.model';
import { Estoque } from './estoque/estoque.model';
import { Farmacia } from './farmacias/farmacias.model';
import { DoacaoRemedio } from './doacao-remedio/doacao-remedio.model';
import { Remedio } from './remedios/remedios.model';
import { Receita } from './receita/receita.model';
import { Solicitacao } from './solicitacoes/solicitacao.model';
import { EstoqueModule } from './estoque/estoque.module';
import { FarmaciasModule } from './farmacias/farmacias.module';
import { DoacaoRemedioModule } from './doacao-remedio/doacao-remedio.module';
import { RemediosModule } from './remedios/remedios.module';
<<<<<<< HEAD
import { EstoqueModule } from './estoque/estoque.module';
import { Estoque } from './estoque/estoque.model';
import { Solicitacao } from './solicitacoes/solicitacao.model';
import { SolicitacoesModule } from './solicitacoes/solicitacao.module';
import { Receita } from './receita/receita.model';
import { ReceitaModule } from './receita/receita-module';

@Module({

  imports: [
    SequelizeModule.forRoot({
=======
import { ReceitaModule } from './receita/receita-module';
import { SolicitacoesModule } from './solicitacoes/solicitacao.module';

@Module({
  imports: [SequelizeModule.forRoot({
>>>>>>> origin/MariaGeral
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
<<<<<<< HEAD
      models: [Farmacia, DoacaoRemedio, Usuario, Remedio, Estoque, Solicitacao, Receita],
      autoLoadModels: true,
      synchronize: true,
    }),
    FarmaciasModule, DoacaoRemedioModule, UsuariosModule, RemediosModule, EstoqueModule, SolicitacoesModule, ReceitaModule
=======
      models: [Usuario, Estoque, Farmacia, DoacaoRemedio, Remedio, Receita, Solicitacao],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsuariosModule, EstoqueModule, FarmaciasModule, DoacaoRemedioModule, RemediosModule, ReceitaModule,
>>>>>>> origin/MariaGeral
  ],
  controllers: [AppController],
  providers: [AppService],
})
<<<<<<< HEAD

export class AppModule {}



=======
export class AppModule {}
>>>>>>> origin/MariaGeral
