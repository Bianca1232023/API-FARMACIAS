import { FarmaciasService } from './farmacias.service';
import { CreateFarmaciaDto } from './dto/create-farmacia.dto';
import { UpdateFarmaciaDto } from './dto/update-farmacia.dto';
export declare class FarmaciasController {
    private readonly service;
    constructor(service: FarmaciasService);
    create(dto: CreateFarmaciaDto): Promise<import("./farmacias.model").Farmacia>;
    findAll(): Promise<import("./farmacias.model").Farmacia[]>;
    findOne(id: string): Promise<import("./farmacias.model").Farmacia | null>;
    findByBairro(bairro: string): Promise<import("./farmacias.model").Farmacia[]>;
    findByCidade(cidade: string): Promise<import("./farmacias.model").Farmacia[]>;
    patch(id: string, dto: UpdateFarmaciaDto): Promise<import("./farmacias.model").Farmacia>;
    update(id: number, updateDto: UpdateFarmaciaDto): Promise<import("./farmacias.model").Farmacia>;
    remove(id: string): Promise<{
        message: string;
    }>;
    findPharmaciesByRemedioId(remedioId: number): Promise<import("./farmacias.model").Farmacia[]>;
}
export declare class FarmaciaController {
    findAll(): never[];
}
