import { Solicitacao } from './solicitacao.model';
import { Remedio } from '../remedios/remedios.model';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
export declare class SolicitacoesService {
    private solicitacaoModel;
    private readonly remedioModel;
    constructor(solicitacaoModel: typeof Solicitacao, remedioModel: typeof Remedio);
    create(dto: CreateSolicitacaoDto): Promise<Solicitacao>;
    findAll(): Promise<Solicitacao[]>;
    findById(id: number): Promise<Solicitacao>;
    listarSolicitacoesPorUsuario(usuarioId: number): Promise<Solicitacao[]>;
    update(id: number, dto: UpdateSolicitacaoDto): Promise<Solicitacao>;
    remove(id: number): Promise<void>;
    HistoricoSolicitacao(): Promise<Solicitacao[]>;
}
