import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty()
  nome: string;

  @ApiProperty({ required: false })
  dataNascimento?: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  funcionario: boolean;

  @ApiProperty({ required: false })
  farmaciaId?: number;
}
