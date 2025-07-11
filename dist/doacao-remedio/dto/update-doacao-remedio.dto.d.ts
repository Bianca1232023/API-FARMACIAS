import { CreateDoacaoRemedioDto } from './create-doacao-remedio.dto';
declare const UpdateDoacaoRemedioDto_base: import("@nestjs/mapped-types/dist/mapped-type.interface").MappedType<Partial<CreateDoacaoRemedioDto>>;
export declare class UpdateDoacaoRemedioDto extends UpdateDoacaoRemedioDto_base {
    doacaoRemedioId: number;
    solicitacaoId: number;
    usuarioId?: number;
    remedioId?: number;
    quantidade?: number;
    data_doacao?: Date;
    data_fim_tratamento?: Date;
}
export {};
