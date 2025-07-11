import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './usuarios.model';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(id: string): Promise<Usuario | null>;
    findByEmail(email: string): Promise<Usuario | null>;
    findFuncionarios(): Promise<Usuario[]>;
    findByFarmaciaId(id: string): Promise<Usuario[]>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario | null>;
    patch(id: string, data: Partial<UpdateUsuarioDto>): Promise<Usuario | null>;
    remove(id: string): Promise<void>;
}
