import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({ tableName: 'farmacias', timestamps: false }) 
export class Farmacia extends Model {
  @PrimaryKey
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})  
  farmaciaId: number;

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
