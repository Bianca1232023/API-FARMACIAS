import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({ tableName: 'estoque', timestamps: false })
export class Estoque extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column(DataType.INTEGER)
  farmaciaId: number;

  @Column(DataType.INTEGER)
  remedioId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: { min: 0 },
    field: 'quantidade_disponivel',
  })
  quantidade_disponivel: number;
}
