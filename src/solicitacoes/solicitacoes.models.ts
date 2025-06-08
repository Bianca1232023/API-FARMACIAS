import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'solicitacoes', timestamps: false }) 
export class Solicitacao extends Model<Solicitacao> {
  @Column({ type: DataType.INTEGER })
  usuarioId: number;

  @Column({ type: DataType.INTEGER })
  remedioId: number;

  @Column({ type: DataType.INTEGER })
  farmaciaId: number;

  @Column({ type: DataType.STRING })
  justificativa: string;

  @Column({ type: DataType.STRING, defaultValue: 'pendente' }) // status: pendente | aprovada | recusada
  status: string;
}
