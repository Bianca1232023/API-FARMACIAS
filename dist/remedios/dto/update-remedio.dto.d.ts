import { CreateRemedioDto } from './create-remedio.dto';
declare const UpdateRemedioDto_base: import("@nestjs/mapped-types/dist/mapped-type.interface").MappedType<Partial<CreateRemedioDto>>;
export declare class UpdateRemedioDto extends UpdateRemedioDto_base {
    nome?: string;
    principio_ativo?: string;
    categoria?: string;
    dosagem?: string;
    fabricante?: string;
}
export {};
