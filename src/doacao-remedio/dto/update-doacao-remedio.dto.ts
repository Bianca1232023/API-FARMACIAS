import { PartialType } from '@nestjs/mapped-types';
import { CreateDoacaoRemedioDto } from './create-doacao-remedio.dto';

export class UpdateDoacaoRemedioDto extends PartialType(CreateDoacaoRemedioDto) {}
