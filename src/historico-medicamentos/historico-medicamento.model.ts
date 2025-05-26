import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Usuario } from '../usuarios/usuarios.model';
import { Remedio } from '../remedios/remedios.model';

@Table
export class HistoricoMedicamento extends Model<HistoricoMedicamento> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  //id: number;

  @ForeignKey(() => Usuario)
  @Column(DataType.INTEGER)
  usuarioId: number;

  @BelongsTo(() => Usuario)
  usuario: Usuario;

  @ForeignKey(() => Remedio)
  @Column(DataType.INTEGER)
  medicamentoId: number;

  @BelongsTo(() => Remedio)
  medicamento: Remedio;

  @Column({ type: DataType.DATE, allowNull: false })
  dataRetirada: Date;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  medicamentoAcabou: boolean;

  @Column({ type: DataType.STRING, allowNull: true })
  justificativa: string;

 
}


