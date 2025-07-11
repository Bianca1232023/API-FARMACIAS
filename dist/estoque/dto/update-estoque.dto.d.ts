import { CreateEstoqueDto } from './create-estoque.dto';
declare const UpdateEstoqueDto_base: import("@nestjs/mapped-types/dist/mapped-type.interface").MappedType<Partial<CreateEstoqueDto>>;
export declare class UpdateEstoqueDto extends UpdateEstoqueDto_base {
    farmaciaId?: number;
    remedioId?: number;
    quantidade_disponivel?: number;
}
export {};
