import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Solicitacao extends Model<Solicitacao> {
  @Column({ type: DataType.INTEGER })
  usuarioId: number;

  @Column({ type: DataType.INTEGER })
  medicamentoId: number;

  @Column({ type: DataType.STRING })
  justificativa: string;

  @Column({ type: DataType.STRING, defaultValue: 'pendente' }) // status: pendente | aprovada | recusada
  status: string;
}
