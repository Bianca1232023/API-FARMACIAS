import { Remedio } from './remedios.model';
import { CreateRemedioDto } from './dto/create-remedio.dto';
import { UpdateRemedioDto } from './dto/update-remedio.dto';
export declare class RemediosService {
    private remedioModel;
    constructor(remedioModel: typeof Remedio);
    create(dto: CreateRemedioDto): Promise<Remedio>;
    findAll(): Promise<Remedio[]>;
    findOne(id: number): Promise<Remedio | null>;
    findByPrincipio_Ativo(principio_ativo: string): Promise<Remedio[]>;
    findByCategoria(categoria: string): Promise<Remedio[]>;
    listAllCategorias(): Promise<string[]>;
    findByNome(nome: string): Promise<Remedio[]>;
    findByDosagem(dosagem: string): Promise<Remedio[]>;
    findByFabricante(fabricante: string): Promise<Remedio[]>;
    update(id: number, dto: UpdateRemedioDto): Promise<[affectedCount: number]>;
    updateCategoria(id: number, categoria: string): Promise<Remedio>;
    updateAll(id: number, dto: UpdateRemedioDto): Promise<Remedio>;
    replaceNome(id: number, nome: string): Promise<Remedio>;
    remove(id: number): Promise<{
        message: string;
    }>;
    updateFabricante(id: number, fabricante: string): Promise<Remedio>;
    updatePrincipioAtivo(id: string, principio_ativo: string): Promise<{
        message: string;
    }>;
}
