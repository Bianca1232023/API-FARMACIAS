import { RemediosService } from './remedios.service';
import { CreateRemedioDto } from './dto/create-remedio.dto';
import { UpdateRemedioDto } from './dto/update-remedio.dto';
export declare class RemediosController {
    private readonly remediosService;
    constructor(remediosService: RemediosService);
    create(dto: CreateRemedioDto): Promise<import("./remedios.model").Remedio>;
    findAll(): Promise<import("./remedios.model").Remedio[]>;
    findOne(id: string): Promise<import("./remedios.model").Remedio | null>;
    findByCategoria(categoria: string): Promise<import("./remedios.model").Remedio[]>;
    listAllCategorias(): Promise<string[]>;
    findByPrincipio_Ativo(principio_ativo: string): Promise<import("./remedios.model").Remedio[]>;
    updateAll(id: string, updateRemedioDto: UpdateRemedioDto): Promise<import("./remedios.model").Remedio>;
    updatePrincipioAtivo(id: string, body: {
        principio_ativo: string;
    }): Promise<{
        message: string;
    }>;
    findByNome(nome: string): Promise<import("./remedios.model").Remedio[]>;
    update(id: string, updateRemedioDto: UpdateRemedioDto): Promise<[affectedCount: number]>;
    updateCategoria(id: string, body: {
        categoria: string;
    }): Promise<import("./remedios.model").Remedio>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
export declare class FarmaciaController {
    findAll(): never[];
}
