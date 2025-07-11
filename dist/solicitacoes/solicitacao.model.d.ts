import { Model } from 'sequelize-typescript';
import { Receita } from '../receita/receita.model';
export declare class Solicitacao extends Model<Solicitacao> {
    solicitacaoId: number;
    usuarioId: number;
    remedioId: number;
    farmaciaId: number;
    justificativa: string;
    status: string;
    receita: Receita;
    receitaId: number;
    dataCriacao: Date;
}
