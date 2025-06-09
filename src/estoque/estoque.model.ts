import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({ tableName: 'estoque', timestamps: false })
export class Estoque extends Model<Estoque> {
  @ApiProperty()
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare estoqueId: number;

  @ApiProperty()
  @Column(DataType.INTEGER)
  farmaciaId: number;

  @ApiProperty()
  @Column(DataType.INTEGER)
  remedioId: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: { min: 0 },
    field: 'quantidade_disponivel',
  })
  quantidade_disponivel: number;
}
