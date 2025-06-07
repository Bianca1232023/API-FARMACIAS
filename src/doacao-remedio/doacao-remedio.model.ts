import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey } from 'sequelize-typescript';
import { Usuario } from '../usuarios/usuarios.model';
import { Remedio } from '../remedios/remedios.model';

@Table({ tableName: 'doacoes_remedios', timestamps: false })
export class DoacaoRemedio extends Model {
  @PrimaryKey
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})  
  doacaoRemedioId: number;

  @ForeignKey(() => Usuario)
  @Column(DataType.INTEGER)
  usuarioId: number;

  @ForeignKey(() => Remedio)
  @Column(DataType.INTEGER)
  remedioId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  quantidade: number;

  @Column({ type: DataType.DATEONLY, defaultValue: DataType.NOW })
  data_doacao: Date;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  data_fim_tratamento: Date;

  @BelongsTo(() => Usuario)
  usuario: Usuario;

  @BelongsTo(() => Remedio)
  remedio: Remedio;
}