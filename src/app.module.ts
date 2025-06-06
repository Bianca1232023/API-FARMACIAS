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

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'bsi.cefet-rj.br',
      port: 15432,
      username: 'livialyrio',
      password: '123456',
      database: 'db_farmaciasDigitaisSociais',
      models: [Farmacia, DoacaoRemedio, Usuario, Remedio],
      autoLoadModels: true,
      synchronize: true,
    }),
    FarmaciasModule, DoacaoRemedioModule, UsuariosModule, RemediosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
