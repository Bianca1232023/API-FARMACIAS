import { Model } from 'sequelize-typescript';
export declare class Usuario extends Model<Usuario> {
    nome: string;
    dataNascimento: Date;
    email: string;
    funcionario: boolean;
    farmaciaId: number;
}
