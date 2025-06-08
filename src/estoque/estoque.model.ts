import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { Farmacia } from 'src/farmacias/farmacias.model';

@Table({ tableName: 'estoque', timestamps: false })
export class Estoque extends Model<Estoque> {
  @ApiProperty()
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare estoqueId: number;

  @ForeignKey(() => Farmacia)
  @ApiProperty()
  @Column(DataType.INTEGER)
  declare farmaciaId: number;

  @ForeignKey(() => Farmacia)
  @ApiProperty()
  @Column(DataType.INTEGER)
  declare remedioId: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: { min: 0 },
    field: 'quantidade_disponivel',
  })
  declare quantidade_disponivel: number;
}
