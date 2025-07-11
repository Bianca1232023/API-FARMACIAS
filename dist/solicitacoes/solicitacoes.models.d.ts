import { Model } from 'sequelize-typescript';
export declare class Solicitacao extends Model<Solicitacao> {
    usuarioId: number;
    remedioId: number;
    farmaciaId: number;
    justificativa: string;
    status: string;
}
