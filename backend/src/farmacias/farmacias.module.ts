import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Farmacia } from './farmacias.model';
import { FarmaciasService } from './farmacias.service';
import { FarmaciasController } from './farmacias.controller';

@Module({
  imports: [SequelizeModule.forFeature([Farmacia])],
  controllers: [FarmaciasController],
  providers: [FarmaciasService],
})
export class FarmaciasModule {}
