import { DoacaoRemedioService } from './doacao-remedio.service';
import { CreateDoacaoRemedioDto } from './dto/create-doacao-remedio.dto';
import { UpdateDoacaoRemedioDto } from './dto/update-doacao-remedio.dto';
export declare class DoacaoRemedioController {
    private readonly service;
    constructor(service: DoacaoRemedioService);
    create(dto: CreateDoacaoRemedioDto): Promise<import("./doacao-remedio.model").DoacaoRemedio>;
    findAll(): Promise<import("./doacao-remedio.model").DoacaoRemedio[]>;
    findOne(id: string): Promise<import("./doacao-remedio.model").DoacaoRemedio>;
    findByUsuario(usuarioId: string): Promise<import("./doacao-remedio.model").DoacaoRemedio[]>;
    update(id: string, dto: UpdateDoacaoRemedioDto): Promise<import("./doacao-remedio.model").DoacaoRemedio>;
    patch(id: string, dto: UpdateDoacaoRemedioDto): Promise<import("./doacao-remedio.model").DoacaoRemedio>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
export declare class FarmaciaController {
    findAll(): never[];
}
