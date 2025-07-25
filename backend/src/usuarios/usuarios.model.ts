import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({
  tableName: 'usuarios', timestamps: false })

export class Usuario extends Model<Usuario> {
  @ApiProperty()
  @Column({ type: DataType.STRING(100), allowNull: false })
  nome: string;

  @Column({ type: DataType.DATE, allowNull: true })
  dataNascimento: Date;

  @ApiProperty()
  @Column({type: DataType.STRING(12), allowNull: false, unique: true})
  cpf: string;


  @ApiProperty({ required: false })
  @Column(DataType.DATE)
  //dataNascimento?: Date;

  @ApiProperty()
  @Column({ type: DataType.STRING(60), allowNull: false, unique: true })
  email: string;

  @ApiProperty()
  @Column({ type: DataType.BOOLEAN, allowNull: false })
  funcionario: boolean;

  @ApiProperty({ required: false })
  @Column({ type: DataType.INTEGER, allowNull: true })
  farmaciaId?: number;
}
