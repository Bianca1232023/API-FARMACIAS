import { STRING } from 'sequelize';
import { Table, Column, Model, DataType, PrimaryKey, AllowNull } from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';

<<<<<<< HEAD

@Table({tableName: 'remedios', timestamps: false })
=======
@Table({ tableName: 'remedios', timestamps: false })
>>>>>>> origin/CRUD-Remedios-Bianca
export class Remedio extends Model {
  @PrimaryKey
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})  
  remedioId: number;
  @Column({ type: DataType.STRING(100), allowNull: false })
  nome: string;

  @Column({ type: DataType.STRING(100)})
  principio_ativo: string;

  @Column({type: DataType.STRING(25)})
  categoria: string;

  @Column({type: DataType.STRING(10)})
  dosagem: string;

  @Column({ type: DataType.STRING(50) })
  fabricante: string;

}
