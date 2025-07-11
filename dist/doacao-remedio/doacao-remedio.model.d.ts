import { Model } from 'sequelize-typescript';
import { Usuario } from '../usuarios/usuarios.model';
import { Remedio } from '../remedios/remedios.model';
export declare class DoacaoRemedio extends Model {
    doacaoRemedioId: number;
    solicitacaoId: number;
    usuarioId: number;
    remedioId: number;
    quantidade: number;
    data_doacao: Date;
    data_fim_tratamento: Date;
    usuario: Usuario;
    remedio: Remedio;
}
