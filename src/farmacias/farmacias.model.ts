import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Farmacia extends Model {
  @Column({ type: DataType.STRING(10), allowNull: false })
  cep: string;

  @Column({ type: DataType.STRING(30), allowNull: false })
  cidade: string;

  @Column({ type: DataType.STRING(30), allowNull: false })
  bairro: string;

  @Column({ type: DataType.STRING(30), allowNull: false })
  logradouro: string;

  @Column({ type: DataType.INTEGER })
  numero: number;
}
