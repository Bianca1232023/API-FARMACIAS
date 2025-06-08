import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
import { ReceitaModule } from './receita/receita-module';
import { SolicitacoesModule } from './solicitacoes/solicitacao.module';

@Module({
  imports: [SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'bsi.cefet-rj.br',
      port: 15432,
      username: 'livialyrio',
      password: '123456',
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