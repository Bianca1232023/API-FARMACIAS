import { DoacaoRemedio } from './doacao-remedio.model';
import { CreateDoacaoRemedioDto } from './dto/create-doacao-remedio.dto';
import { UpdateDoacaoRemedioDto } from './dto/update-doacao-remedio.dto';
export declare class DoacaoRemedioService {
    private readonly doacaoRemedioModel;
    constructor(doacaoRemedioModel: typeof DoacaoRemedio);
    create(dto: CreateDoacaoRemedioDto): Promise<DoacaoRemedio>;
    findAll(): Promise<DoacaoRemedio[]>;
    findOne(id: number): Promise<DoacaoRemedio>;
    findByUsuarioId(usuarioId: number): Promise<DoacaoRemedio[]>;
    update(id: number, dto: UpdateDoacaoRemedioDto): Promise<DoacaoRemedio>;
    patch(id: number, partialDto: Partial<UpdateDoacaoRemedioDto>): Promise<DoacaoRemedio>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
