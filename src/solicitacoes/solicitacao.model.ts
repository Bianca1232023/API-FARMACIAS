import { Column, DataType, ForeignKey, Model, Table, HasOne } from 'sequelize-typescript';

import { Receita } from '../receita/receita.model';
import { Usuario } from '../usuarios/usuarios.model';
import { Remedio } from '../remedios/remedios.model';

@Table
export class Solicitacao extends Model<Solicitacao> {
  @Column({ type: DataType.INTEGER })
  usuarioId: number;

  @Column({ type: DataType.INTEGER })
  remedioId: number;

  @Column({ type: DataType.STRING })
  justificativa: string;

  @Column({ type: DataType.STRING, defaultValue: 'pendente' }) // status: pendente | aprovada | recusada
  status: string;
  
@HasOne(() => Receita)
receita: Receita;

  @ForeignKey(() => Remedio)
  @Column
  remediosId: number;
  

  @ForeignKey(() => Receita)
  @Column({ type: DataType.INTEGER, allowNull: true })
  receitaId: number;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  dataCriacao: Date;

}
