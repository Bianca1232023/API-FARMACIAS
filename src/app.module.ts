import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/usuarios.model';
import { Farmacia } from './farmacias/farmacias.model';
import { FarmaciasModule } from './farmacias/farmacias.module';

@Module({
  imports: [SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'bsi.cefet-rj.br',
      port: 15432,
      username: 'livialyrio',
      password: '123456',
      database: 'db_farmaciasDigitaisSociais',
      models: [Usuario],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsuariosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
