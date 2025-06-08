import { STRING } from 'sequelize';
import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';


@Table({tableName: 'remedios', timestamps: false })
export class Remedio extends Model {
  @Column({ type: DataType.STRING(100), allowNull: false })
  nome: string;

  @Column({ type: DataType.STRING(100)})
  principio_ativo: string;

  @Column({type: DataType.STRING(25)})
  categoria: string;

  @Column({type: DataType.STRING})
  dosagem: string;

  @Column({ type: DataType.STRING(50) })
  fabricante: string;

}
