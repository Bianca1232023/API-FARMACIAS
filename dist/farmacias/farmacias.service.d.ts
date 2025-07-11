import { Farmacia } from './farmacias.model';
import { CreateFarmaciaDto } from './dto/create-farmacia.dto';
import { UpdateFarmaciaDto } from './dto/update-farmacia.dto';
export declare class FarmaciasService {
    private farmaciaModel;
    constructor(farmaciaModel: typeof Farmacia);
    create(dto: CreateFarmaciaDto): Promise<Farmacia>;
    findAll(): Promise<Farmacia[]>;
    findOne(id: number): Promise<Farmacia | null>;
    findByBairro(bairro: string): Promise<Farmacia[]>;
    findByCidade(cidade: string): Promise<Farmacia[]>;
    update(id: number, updateDto: UpdateFarmaciaDto): Promise<Farmacia>;
    patch(id: number, partialDto: Partial<UpdateFarmaciaDto>): Promise<Farmacia>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findPharmaciesByRemedioId(remedioId: number): Promise<Farmacia[]>;
}
