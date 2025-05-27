
import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { HistoricoMedicamento } from '../historico-medicamentos/historico-medicamento.model';

@Table({
  tableName: 'usuarios', timestamps: false})

export class Usuario extends Model<Usuario> {
  @Column({
    type: DataType.STRING(100), allowNull: false})
    nome: string;

  @Column({
    type: DataType.STRING(100), allowNull: false, unique: true})
    email: string;

  @Column({
    type: DataType.STRING(100), allowNull: false})
    senha: string;
}
