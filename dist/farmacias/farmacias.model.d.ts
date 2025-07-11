import { Model } from 'sequelize-typescript';
import { Estoque } from 'backend/src/estoque/estoque.model';
export declare class Farmacia extends Model {
    farmaciaId: number;
    cep: string;
    cidade: string;
    bairro: string;
    logradouro: string;
    numero: number;
    estoques: Estoque[];
}
