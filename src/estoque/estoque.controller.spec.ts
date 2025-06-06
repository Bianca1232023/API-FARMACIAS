import { Test, TestingModule } from '@nestjs/testing';
import { EstoqueController } from './estoque.controller';
import { EstoqueService } from './estoque.service';

describe('EstoqueController', () => {
  let controller: EstoqueController;
  let service: EstoqueService;

  beforeEach(async () => {
    const mockService = {
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      patch: jest.fn(),
      remove: jest.fn(),
      findByFarmacia: jest.fn(),
      findByRemedio: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstoqueController],
      providers: [{ provide: EstoqueService, useValue: mockService }],
    }).compile();

    controller = module.get<EstoqueController>(EstoqueController);
    service = module.get<EstoqueService>(EstoqueService);
  });

  it('deve ser definido', () => {
    expect(controller).toBeDefined();
  });

  it('criar um novo item de estoque', async () => {
    const dto = { 
      farmaciaId: 1, 
      remedioId: 2, 
      quantidade_disponivel: 10 
    };

    (service.create as jest.Mock).mockResolvedValue(dto);
    const result = await controller.create(dto);
    expect(result).toEqual(dto);
  });

  it('retorna todos os estoques', async () => {
    const result = [{ id: 1 }, { id: 2 }];

    (service.findAll as jest.Mock).mockResolvedValue(result);
    const estoques = await controller.findAll();
    expect(estoques).toEqual(result);
  });

  it('retorna estoque por id', async () => {
    const result = { id: 1 };

    (service.findOne as jest.Mock).mockResolvedValue(result);
    const estoque = await controller.findOne('1');
    expect(estoque).toEqual(result);
  });

  it('atualiza item de estoque com PUT', async () => {
    const dto = { quantidade_disponivel: 8 };

    (service.update as jest.Mock).mockResolvedValue([1]);
    const updated = await controller.update('1', dto);
    expect(updated).toEqual([1]);
  });

  it('atualiza item de estoque com PATCH', async () => {
    const dto = { quantidade_disponivel: 15 };

    (service.patch as jest.Mock).mockResolvedValue([1]);
    const patched = await controller.patch('1', dto);
    expect(patched).toEqual([1]);
  });

  it('remove um estoque', async () => {
    (service.remove as jest.Mock).mockResolvedValue(1);
    const removed = await controller.remove('1');
    expect(removed).toEqual(1);
  });

  it('retorna estoques por farmacia', async () => {
    const data = [{ id: 1, farmaciaId: 5 }];

    (service.findByFarmacia as jest.Mock).mockResolvedValue(data);
    const result = await controller.findByFarmacia('5');
    expect(result).toEqual(data);
  });

  it('retorna estoques por remedio', async () => {
    const data = [{ id: 2, remedioId: 3 }];

    (service.findByRemedio as jest.Mock).mockResolvedValue(data);
    const result = await controller.findByRemedio('3');
    expect(result).toEqual(data);
  });
});
