import { Test, TestingModule } from '@nestjs/testing';
import { RemediosService } from './remedios.service';
import { getModelToken } from '@nestjs/sequelize';
import { Remedio } from './remedios.model';

describe('RemediosService', () => {
  let service: RemediosService;
  let model: typeof Remedio;

  const remedioExemplo = {
    id: 1,
    nome: 'Paracetamol',
    dosagem: '500 mg',
    categoria: 'Analgésico',
    principio_ativo: 'paracetamol',
    fabricante: 'Genéricos LTDA',
    update: jest.fn().mockResolvedValue(true),
    save: jest.fn().mockResolvedValue(true),
    destroy: jest.fn().mockResolvedValue(true),
  } as any;

  const mockRemedioModel = {
    create: jest.fn().mockResolvedValue(remedioExemplo),
    findAll: jest.fn().mockResolvedValue([remedioExemplo]),
    findByPk: jest.fn().mockResolvedValue(remedioExemplo),
    update: jest.fn().mockResolvedValue([1]),
    findOne: jest.fn(),
    destroy: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemediosService,
        {
          provide: getModelToken(Remedio),
          useValue: mockRemedioModel,
        },
      ],
    }).compile();

    service = module.get<RemediosService>(RemediosService);
    model = module.get<typeof Remedio>(getModelToken(Remedio));
  });

  it('deve ser definido', () => {
    expect(service).toBeDefined();
  });

  it('deve criar um remédio', async () => {
    const result = await service.create({
      nome: 'Paracetamol',
      dosagem: '500 mg',
      categoria: 'Analgésico',
      principio_ativo: 'paracetamol',
      fabricante: 'Genéricos LTDA',
    });
    expect(result).toEqual(remedioExemplo);
    expect(mockRemedioModel.create).toHaveBeenCalled();
  });

  it('deve listar todos os remédios', async () => {
    const result = await service.findAll();
    expect(result).toEqual([remedioExemplo]);
    expect(mockRemedioModel.findAll).toHaveBeenCalled();
  });

  it('deve retornar um remédio pelo ID', async () => {
    const result = await service.findOne(1);
    expect(result).toEqual(remedioExemplo);
    expect(mockRemedioModel.findByPk).toHaveBeenCalledWith(1);
  });

  // Adicione mais testes para update, delete, etc. conforme necessário
});
