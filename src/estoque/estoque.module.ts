import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Estoque } from './estoque.model';
import { EstoqueService } from './estoque.service';
import { EstoqueController } from './estoque.controller';

@Module({
  imports: [SequelizeModule.forFeature([Estoque])],
  controllers: [EstoqueController],
  providers: [EstoqueService],
  exports: [EstoqueService],//adiiconei
})
export class EstoqueModule {}
