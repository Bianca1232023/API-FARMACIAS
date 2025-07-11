import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { Estoque } from './estoque.model';
export declare class EstoqueService {
    private estoqueModel;
    constructor(estoqueModel: typeof Estoque);
    create(dto: CreateEstoqueDto): Promise<Estoque>;
    findAll(): Promise<Estoque[]>;
    findOne(id: number): Promise<Estoque>;
    update(id: number, updateDto: UpdateEstoqueDto): Promise<Estoque>;
    patch(id: number, dto: Partial<UpdateEstoqueDto>): Promise<Estoque>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findByFarmacia(farmaciaId: number): Promise<Estoque[]>;
    findByRemedio(remedioId: number): Promise<Estoque[]>;
    verificarDisponibilidade(remedioId: number): Promise<boolean>;
    findLowStock(): Promise<Estoque[]>;
}
