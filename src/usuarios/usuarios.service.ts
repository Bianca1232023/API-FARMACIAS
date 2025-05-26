import { Usuario } from './entities/usuario.entity';
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';


@Injectable()
export class UsuariosService {
  private usuarios: Usuario[] = [];

  create(createUsuarioDto: CreateUsuarioDto): Usuario {
    const id = this.usuarios.length + 1;
    const usuario: Usuario = { id, ...createUsuarioDto };
    this.usuarios.push(usuario);
    return usuario;
  }

  findAll(): Usuario[] {
    return this.usuarios;
  }

  findOne(id: number): Usuario | undefined {
    return this.usuarios.find(user => user.id === id);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto): Usuario | null {
    const index = this.usuarios.findIndex(user => user.id === id);
    if (index >= 0) {
      this.usuarios[index] = { ...this.usuarios[index], ...updateUsuarioDto };
      return this.usuarios[index];
    }
    return null;
  }

  remove(id: number): Usuario | null {
    const index = this.usuarios.findIndex(user => user.id === id);
    if (index >= 0) {
      const [deleted] = this.usuarios.splice(index, 1);
      return deleted;
    }
    return null;
  }
}

