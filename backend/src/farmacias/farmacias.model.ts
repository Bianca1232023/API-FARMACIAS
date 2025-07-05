import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  HasMany,
} from 'sequelize-typescript';
import { Estoque } from 'src/estoque/estoque.model';

@Table({ tableName: 'farmacias', timestamps: false })
export class Farmacia extends Model {
  //contempla regra de negocio: uma farmacia não pode ser cadastrada sem os dados completos de endereço
  @PrimaryKey
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  farmaciaId: number;

  @Column({ type: DataType.STRING(10), allowNull: false })
  cep: string;

  @Column({ type: DataType.STRING(30), allowNull: false })
  cidade: string;

  @Column({ type: DataType.STRING(30), allowNull: false })
  bairro: string;

  @Column({ type: DataType.STRING(30), allowNull: false })
  logradouro: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  numero: number;

  @HasMany(() => Estoque)
  declare estoques: Estoque[];
}
