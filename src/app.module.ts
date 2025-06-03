import { Module } from '@nestjs/common';
import Sequelize from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Farmacia } from './farmacias/farmacias.model';
import { FarmaciasModule } from './farmacias/farmacias.module';


@Module({

  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'bsi.cefet-rj.br',
      port: 15432,
      username: 'livialyrio',
      password: '123456',
      database: 'db_farmaciasDigitaisSociais',
      models: [Farmacia],
      autoLoadModels: true,
      synchronize: true,
    }),
    FarmaciasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

