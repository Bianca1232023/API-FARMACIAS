import { Test, TestingModule } from '@nestjs/testing';
import { EstoqueService } from './estoque.service';
import { getModelToken } from '@nestjs/sequelize';
import { Estoque } from './estoque.model';

describe('EstoqueService', () => {
  let service: EstoqueService;
  let mockEstoqueModel: any;

  beforeEach(async () => {
    mockEstoqueModel = {
      create: jest.fn(),
      findAll: jest.fn(),
      findByPk: jest.fn(),
      update: jest.fn(),
      destroy: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EstoqueService,
        {
          provide: getModelToken(Estoque),
          useValue: mockEstoqueModel,
        },
      ],
    }).compile();

    service = module.get<EstoqueService>(EstoqueService);
  });

  it('deve ser definido', () => {
    expect(service).toBeDefined();
  });

  it('deve criar um novo item de estoque', async () => {
    const dto = { farmaciaId: 1, remedioId: 2, quantidade_disponivel: 10 };
    mockEstoqueModel.create.mockResolvedValue(dto);

    const result = await service.create(dto);
    expect(result).toEqual(dto);
    expect(mockEstoqueModel.create).toHaveBeenCalledWith(dto);
  });

  it('deve retornar todos os estoques', async () => {
    const result = [{ id: 1 }, { id: 2 }];
    mockEstoqueModel.findAll.mockResolvedValue(result);

    expect(await service.findAll()).toEqual(result);
  });

  it('deve retornar um estoque pelo id', async () => {
    const result = { id: 1 };
    mockEstoqueModel.findByPk.mockResolvedValue(result);

    expect(await service.findOne(1)).toEqual(result);
  });

  it('deve atualizar um estoque', async () => {
    const dto = { quantidade_disponivel: 5 };
    mockEstoqueModel.update.mockResolvedValue([1]);

    expect(await service.update(1, dto)).toEqual([1]);
    expect(mockEstoqueModel.update).toHaveBeenCalledWith(dto, { where: { id: 1 } });
  });

  it('deve remover um estoque', async () => {
    mockEstoqueModel.destroy.mockResolvedValue(1);

    expect(await service.remove(1)).toEqual(1);
  });
});
