import { CreateFarmaciaDto } from './create-farmacia.dto';
declare const UpdateFarmaciaDto_base: import("@nestjs/mapped-types/dist/mapped-type.interface").MappedType<Partial<CreateFarmaciaDto>>;
export declare class UpdateFarmaciaDto extends UpdateFarmaciaDto_base {
    farmaciaId: number;
    cep?: string;
    cidade?: string;
    bairro?: string;
    logradouro?: string;
    numero?: number;
}
export {};
