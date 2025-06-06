import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
