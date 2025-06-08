import { Column, DataType, ForeignKey, Model, Table, HasOne, PrimaryKey } from 'sequelize-typescript';

import { Receita } from '../receita/receita.model';
import { Usuario } from '../usuarios/usuarios.model';
import { Remedio } from '../remedios/remedios.model';
import { Farmacia } from 'src/farmacias/farmacias.model';

@Table({ tableName: 'solicitacoes', timestamps: false }) 
export class Solicitacao extends Model<Solicitacao> {
    @PrimaryKey
    @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})  
    solicitacaoId: number;
  
  @Column({ type: DataType.INTEGER })
  usuarioId: number;

  @ForeignKey(() => Remedio)
  @Column
  remedioId: number;

   @ForeignKey(() => Farmacia)
  @Column({ type: DataType.INTEGER })
  farmaciaid: number;


  @Column({ type: DataType.STRING })
  justificativa: string;

  @Column({ type: DataType.STRING, defaultValue: 'pendente' }) // status: pendente | aprovada | recusada
  status: string;
  
  @HasOne(() => Receita)
  receita: Receita;

  @ForeignKey(() => Receita)
  @Column({ type: DataType.INTEGER, allowNull: true })
  receitaId: number;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  dataCriacao: Date;

}
