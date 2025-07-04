import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';

@Table({ tableName: 'remedios', timestamps: false })
export class Remedio extends Model {
  @PrimaryKey
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  remedioId: number;
  @Column({ type: DataType.STRING(100), allowNull: false })
  nome: string;

  @Column({ type: DataType.STRING(100) })
  principio_ativo: string;

  @Column({ type: DataType.STRING(25) })
  categoria: string;

  @Column({ type: DataType.STRING(10) })
  dosagem: string;

  @Column({ type: DataType.STRING(50) })
  fabricante: string;

  @Column({ type: DataType.INTEGER }) //
  quantidade: number;
}
