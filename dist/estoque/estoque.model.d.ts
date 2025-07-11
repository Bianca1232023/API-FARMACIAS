import { Model } from 'sequelize-typescript';
export declare class Estoque extends Model<Estoque> {
    estoqueId: number;
    farmaciaId: number;
    remedioId: number;
    quantidade_disponivel: number;
}
