import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from './usuarios.model';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario)
    private usuarioModel: typeof Usuario,
  ) {}

  async create(createUsuarioDto: CreationAttributes<Usuario>): Promise<Usuario> {
    return this.usuarioModel.create(createUsuarioDto);
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

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario | null> {
    await this.usuarioModel.update(updateUsuarioDto, { where: { id } });
    return this.findOne(id);
  }

  async patch(id: number, data: Partial<UpdateUsuarioDto>): Promise<Usuario | null> {
    await this.usuarioModel.update(data, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usuarioModel.destroy({ where: { id } });
  }

  async findByFarmaciaId(farmaciaId: number): Promise<Usuario[]> {
    return this.usuarioModel.findAll({ where: { farmaciaId } });
  }
}
