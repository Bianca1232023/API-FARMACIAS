import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from './usuarios.model';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario)
    private usuarioModel: typeof Usuario,
  ) {}

  // Regra de negócio: CPF e email são obrigatórios para cadastro completo
  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const { cpf, email } = createUsuarioDto;
    if (!cpf || !email) {
      throw new Error('CPF e Email são obrigatórios');
    }
    // Regra de negócio: CPF deve ser único
    const cpfExists = await this.usuarioModel.findOne({ where: { cpf } });
    if (cpfExists) {
      throw new Error('CPF já cadastrado');
    }
    return this.usuarioModel.create(createUsuarioDto as any);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioModel.findAll();
  }

  async findOne(id: number): Promise<Usuario | null> {
    return this.usuarioModel.findByPk(id);
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    return this.usuarioModel.findOne({ where: { email } });
  }

  async findFuncionarios(): Promise<Usuario[]> {
    return this.usuarioModel.findAll({ where: { funcionario: true } });
  }

  //Regra de negócio: Não permitir remover CPF nem email ao atualizar
  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario | null> {
    const { cpf, email } = updateUsuarioDto;
    if (cpf == null || email == null) {
      throw new Error('Não é permitido remover CPF ou Email');
    }
    const usuario = await this.findOne(id);
    if (!usuario) return null;

    await usuario.update(updateUsuarioDto);
    return usuario;
  }

  async patch(id: number, data: Partial<UpdateUsuarioDto>): Promise<Usuario | null> {
    const usuario = await this.findOne(id);
    if (!usuario) return null;
    await usuario.update(data);
    return usuario;
  }

  async remove(id: number): Promise<void> {
    await this.usuarioModel.destroy({ where: { id } });
  }

  async findByFarmaciaId(farmaciaId: number): Promise<Usuario[]> {
    return this.usuarioModel.findAll({ where: { farmaciaId } });
  }
}
