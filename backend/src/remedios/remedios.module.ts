import { Module } from '@nestjs/common';
import { RemediosService } from './remedios.service';
import { Remedio } from './remedios.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { RemediosController } from './remedios.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Remedio]),
    AuthModule,
  ],
  controllers: [RemediosController],
  providers: [RemediosService],
})
export class RemediosModule {}
