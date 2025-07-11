import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'usuarios', timestamps: false })

export class Usuario extends Model<Usuario> {
  @Column({ type: DataType.STRING(100), allowNull: false })
  nome: string;

  @Column({ type: DataType.DATE, allowNull: true })
  dataNascimento: Date;

  @Column({ type: DataType.STRING(60), allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  funcionario: boolean;

  @Column({ type: DataType.INTEGER, allowNull: true })
  farmaciaId: number;
}
