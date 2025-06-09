import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey } from 'sequelize-typescript';
import { Usuario } from '../usuarios/usuarios.model';
import { Remedio } from '../remedios/remedios.model';
import { Solicitacao } from 'src/solicitacoes/solicitacao.model';

@Table({ tableName: 'doacoes_remedios', timestamps: false })
export class DoacaoRemedio extends Model {
  @PrimaryKey
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})  
  declare doacaoRemedioId: number;

  @ForeignKey(() => Solicitacao)
  @Column(DataType.INTEGER)
  declare solicitacaoId: number;

  @ForeignKey(() => Usuario)
  @Column(DataType.INTEGER)
  declare usuarioId: number;

  @ForeignKey(() => Remedio)
  @Column(DataType.INTEGER)
  declare remedioId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  declare quantidade: number;

  @Column({ type: DataType.DATEONLY, defaultValue: DataType.NOW })
  declare data_doacao: Date;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  declare data_fim_tratamento: Date;

  @BelongsTo(() => Usuario)
  declare usuario: Usuario;

  @BelongsTo(() => Remedio)
  remedio: Remedio;
}
