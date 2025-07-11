import { Usuario } from './usuarios.model';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { CreationAttributes } from 'sequelize';
export declare class UsuariosService {
    private usuarioModel;
    constructor(usuarioModel: typeof Usuario);
    create(createUsuarioDto: CreationAttributes<Usuario>): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(id: number): Promise<Usuario | null>;
    findByEmail(email: string): Promise<Usuario | null>;
    findFuncionarios(): Promise<Usuario[]>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario | null>;
    patch(id: number, data: Partial<UpdateUsuarioDto>): Promise<Usuario | null>;
    remove(id: number): Promise<void>;
    findByFarmaciaId(farmaciaId: number): Promise<Usuario[]>;
}
