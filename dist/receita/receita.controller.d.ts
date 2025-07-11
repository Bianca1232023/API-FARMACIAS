import { ReceitaService } from './receita.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
export declare class ReceitaController {
    private readonly service;
    ReceitaService: any;
    constructor(service: ReceitaService);
    create(dto: CreateReceitaDto): Promise<import("./receita.model").Receita>;
    findAll(): Promise<import("./receita.model").Receita[]>;
    findById(id: number): Promise<import("./receita.model").Receita>;
    update(id: number, dto: UpdateReceitaDto): Promise<import("./receita.model").Receita>;
    delete(id: number): Promise<void>;
    verificarValidade(id: number): Promise<any>;
}
export declare class FarmaciaController {
    findAll(): never[];
}
