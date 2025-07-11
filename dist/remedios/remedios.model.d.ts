import { Model } from 'sequelize-typescript';
export declare class Remedio extends Model {
    remedioId: number;
    nome: string;
    principio_ativo: string;
    categoria: string;
    dosagem: string;
    fabricante: string;
}
