import { PartialType } from '@nestjs/mapped-types';
import { CreateRemedioDto } from './create-remedio.dto';
import { ApiPropertyOptional} from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsString, IsNotEmpty, IsNumber} from 'class-validator';
import { Op } from 'sequelize';


export class UpdateRemedioDto extends PartialType(CreateRemedioDto) {
      @ApiPropertyOptional({ example: 'puran', description: 'nome do remedio' })
      @IsString()
      @IsNotEmpty()
      nome?: string;
    
      @ApiPropertyOptional({ example: 'levotiroxina', description: 'principio ativo' })
      @IsString()
      @IsNotEmpty()
      principio_ativo?: string;
    
      @ApiPropertyOptional({ example: 'hormonio tireoidiano', description: 'categoria do remedio' })
      @IsString()
      @IsNotEmpty()
      categoria?: string;
    
      @ApiPropertyOptional({ example: '25 mg', description: 'dosagem junto a unidade de medida do principio ativo' })
      @IsNumber()
      @IsNotEmpty()
      dosagem?: string;
    
      @ApiPropertyOptional({ example: 'sanofi', description: 'fabricante do remedio' })
      @IsString()
      @IsNotEmpty()
      fabricante?: string;
}

