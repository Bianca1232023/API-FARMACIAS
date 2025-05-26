import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Remedio extends Model {
  @Column({ type: DataType.STRING(100), allowNull: false })
  nome: string;

  @Column({ type: DataType.NUMBER })
  dosagem: number;

  @Column({ type: DataType.STRING(100)})
  principio_ativo: string;

}
