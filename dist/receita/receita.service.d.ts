import { Receita } from './receita.model';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
export declare class ReceitaService {
    private receitaModel;
    constructor(receitaModel: typeof Receita);
    create(dto: CreateReceitaDto): Promise<Receita>;
    findAll(): Promise<Receita[]>;
    findById(id: number): Promise<Receita>;
    update(id: number, dto: UpdateReceitaDto): Promise<Receita>;
    delete(id: number): Promise<void>;
    verificarValidade(id: number): Promise<{
        validade: boolean;
        diasRestantes: number;
    }>;
}
