import { Column, DataType, ForeignKey, Model, Table, HasOne, PrimaryKey } from 'sequelize-typescript';
import { Receita } from '../receita/receita.model';
import { Remedio } from '../remedios/remedios.model';
import { Farmacia } from '../farmacias/farmacias.model';

@Table({ tableName: 'solicitacoes', timestamps: false }) 
export class Solicitacao extends Model<Solicitacao> {
  @PrimaryKey
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})  
  declare solicitacaoId: number;
  
  @Column({ type: DataType.INTEGER })
  declare usuarioId: number;

  @ForeignKey(() => Remedio)
  @Column
  declare remedioId: number;

  @ForeignKey(() => Farmacia)
  @Column({ type: DataType.INTEGER })
  declare farmaciaId: number;


  @Column({ type: DataType.STRING })
  declare justificativa: string;

  @Column({ type: DataType.STRING, defaultValue: 'pendente' }) // status: pendente | aprovada | recusada
  declare status: string;
  
  @HasOne(() => Receita)
  declare receita: Receita;

  @ForeignKey(() => Receita)
  @Column({ type: DataType.INTEGER, allowNull: true })
  declare receitaId: number;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  declare dataCriacao: Date;

}
