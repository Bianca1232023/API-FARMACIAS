import { Model } from 'sequelize-typescript';
export declare class Receita extends Model<Receita> {
    descricao: string;
    solicitacaoId: number;
    dataReceita: Date;
}
