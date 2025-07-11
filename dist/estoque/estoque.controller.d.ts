import { EstoqueService } from './estoque.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { Estoque } from './estoque.model';
export declare class EstoqueController {
    private readonly service;
    constructor(service: EstoqueService);
    findLowStock(): Promise<Estoque[]>;
    create(createDto: CreateEstoqueDto): Promise<Estoque>;
    findAll(): Promise<Estoque[]>;
    findOne(id: string): Promise<Estoque>;
    update(id: number, updateDto: UpdateEstoqueDto): Promise<Estoque>;
    patch(id: number, dto: Partial<UpdateEstoqueDto>): Promise<Estoque>;
    remove(id: string): Promise<{
        message: string;
    }>;
    findByFarmacia(farmaciaId: string): Promise<Estoque[]>;
    findByRemedio(remedioId: string): Promise<Estoque[]>;
    verificarDisponibilidade(remedioId: number): Promise<{
        disponivel: boolean;
    }>;
}
