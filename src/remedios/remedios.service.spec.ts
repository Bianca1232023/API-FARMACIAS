import { Test, TestingModule } from '@nestjs/testing';
import { RemediosService } from './remedios.service';
import { getModelToken } from '@nestjs/sequelize';
import { Remedio } from './remedios.model';

describe('RemediosService', () => {
  let service: RemediosService;

  const mockRemedioModel = {
    create: jest.fn().mockResolvedValue({ id: 1, nome: 'Puran', dosagem: 25, principio_ativo: 'levotiroxina' }),
    findAll: jest.fn().mockResolvedValue([{ id: 1,nome: 'Puran', dosagem: 25, principio_ativo: 'levotiroxina' }]),
    findByPk: jest.fn().mockResolvedValue(null),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemediosService],
    }).compile();

    service = module.get<RemediosService>(RemediosService);
  });
  
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

    it('should create a remedio', async () => {
    const dto = {
      nome: 'Puran',
      dosagem: 25,
      principio_ativo: 'levotiroxina',
    };
    const result = await service.create(dto);
    expect(result).toHaveProperty('id');
    expect(mockRemedioModel.create).toHaveBeenCalledWith({ ...dto });
  });

    it('should list remedios', async () => {
    const result = await service.findAll();
    expect(Array.isArray(result)).toBe(true);
    expect(mockRemedioModel.findAll).toHaveBeenCalled();
  });

});
