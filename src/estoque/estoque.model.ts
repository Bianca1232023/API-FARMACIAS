import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

export interface EstoqueAttributes {
  id: number;
  farmaciaId: number;
  remedioId: number;
  quantidade_disponivel: number;
}

export interface EstoqueCreationAttributes extends Omit<EstoqueAttributes, 'id'> {}

@Table({
  tableName: 'estoque',
  timestamps: false,
})
export class Estoque extends Model<EstoqueAttributes, EstoqueCreationAttributes> {
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
    validate: {
      min: 0,
    },
    field: 'quantidade_disponivel',
  })
  quantidade_disponivel: number;
}
