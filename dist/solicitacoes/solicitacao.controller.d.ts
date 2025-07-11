import { SolicitacoesService } from './solicitacao.service';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
export declare class FarmaciaController {
    findAll(): never[];
}
export declare class SolicitacaoController {
    private readonly solicitacaoService;
    constructor(solicitacaoService: SolicitacoesService);
    HistoricoSolicitacao(): Promise<import("./solicitacao.model").Solicitacao[]>;
}
export declare class SolicitacoesController {
    private readonly service;
    constructor(service: SolicitacoesService);
    create(dto: CreateSolicitacaoDto): Promise<import("./solicitacao.model").Solicitacao>;
    findAll(): Promise<import("./solicitacao.model").Solicitacao[]>;
    findById(id: string): Promise<import("./solicitacao.model").Solicitacao>;
    update(id: string, dto: UpdateSolicitacaoDto): Promise<import("./solicitacao.model").Solicitacao>;
    remove(id: string): Promise<void>;
}
