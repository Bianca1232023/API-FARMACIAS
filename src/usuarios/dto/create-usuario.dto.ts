export class CreateUsuarioDto {
  nome: string;
  dataNascimento?: string;
  email: string;
  funcionario: boolean;
  farmaciaId?: number;
}
