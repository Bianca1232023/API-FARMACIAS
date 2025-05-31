import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DoacaoRemedioService } from './doacao-remedio.service';
import { DoacaoRemedioController } from './doacao-remedio.controller';
import { DoacaoRemedio } from './doacao-remedio.model';

@Module({
  imports: [SequelizeModule.forFeature([DoacaoRemedio])],
  controllers: [DoacaoRemedioController],
  providers: [DoacaoRemedioService],
})
export class DoacaoRemedioModule {}
