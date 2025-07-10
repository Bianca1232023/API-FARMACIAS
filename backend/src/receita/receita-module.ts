import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Receita } from './receita.model';
import { ReceitaService } from './receita.service';
import { ReceitaController } from './receita.controller';

@Module({
  imports: [SequelizeModule.forFeature([Receita])],
  providers: [ReceitaService],
  controllers: [ReceitaController],
})
export class ReceitaModule {}
