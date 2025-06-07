import { Module } from '@nestjs/common';
import Sequelize from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<<<< Temporary merge branch 1
import { Farmacia } from './farmacias/farmacias.model';
import { DoacaoRemedio } from './doacao-remedio/doacao-remedio.model';
import { DoacaoRemedioModule } from './doacao-remedio/doacao-remedio.module';
import { FarmaciasModule } from './farmacias/farmacias.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'livialyrio',
      password: '123456',
      database: 'db_farmaciasDigitaisSociais',
      models: [Farmacia],
      autoLoadModels: true,
      synchronize: true,
    }),
    FarmaciasModule,
  ],
=========
import { SequelizeModule } from '@nestjs/sequelize';
import { Estoque } from './estoque/estoque.model';
import { EstoqueModule } from './estoque/estoque.module';

@Module({
  imports: [SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'bsi.cefet-rj.br',
      port: 15432,
      username: 'livialyrio',
      password: '123456',
      database: 'db_farmaciasDigitaisSociais',
      models: [Estoque],
      autoLoadModels: true,
      synchronize: true,
    }),
    EstoqueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
