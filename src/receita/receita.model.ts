import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Solicitacao } from '../solicitacoes/solicitacao.model';

@Table
export class Receita extends Model<Receita> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  descricao: string;

  @ForeignKey(() => Solicitacao)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  solicitacaoId: number;

  @Column({ type: DataType.DATE, allowNull: false }) //INCLUI DATA DA CRIACAO DA RECEITA !!!!!!
dataReceita: Date;
}
