import { Test, TestingModule } from '@nestjs/testing';
import { EstoqueController } from './estoque.controller';
import { EstoqueService } from './estoque.service';

describe('EstoqueController', () => {
  let controller: EstoqueController;
  let service: EstoqueService;

  beforeEach(async () => {
    const mockService = {
      create:      jest.fn(),
      findAll:     jest.fn(),
      findOne:     jest.fn(),
      update:      jest.fn(),
      patch:       jest.fn(),     
      remove:      jest.fn(),
      findByFarmacia: jest.fn(),
      findByRemedio:  jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstoqueController],
      providers: [{ provide: EstoqueService, useValue: mockService }],
    }).compile();

    controller = module.get<EstoqueController>(EstoqueController);
    service     = module.get<EstoqueService>(EstoqueService);
  });

  it('deve ser definido', () => {
    expect(controller).toBeDefined();
  });

  it('criar um novo item de estoque', async () => {
    const dto = { farmaciaId: 1, remedioId: 2, quantidade_disponivel: 10 };
    jest.spyOn(service, 'create').mockResolvedValue(dto as any);
    expect(await controller.create(dto)).toEqual(dto);
  });

  it('retorna todos os estoques', async () => {
    const result = [{ id: 1 }, { id: 2 }];
    jest.spyOn(service, 'findAll').mockResolvedValue(result as any);
    expect(await controller.findAll()).toEqual(result);
  });

  it('retorna estoque por id', async () => {
    const result = { id: 1 };
    jest.spyOn(service, 'findOne').mockResolvedValue(result as any);
    expect(await controller.findOne('1')).toEqual(result);
  });

  it('atualiza item de estoque com PUT', async () => {
    const dto = { quantidade_disponivel: 8 };
    jest.spyOn(service, 'update').mockResolvedValue([1] as any);
    expect(await controller.update('1', dto)).toEqual([1]);
  });

  it('atualiza item de estoque com PATCH', async () => {
    const dto = { quantidade_disponivel: 15 };
    jest.spyOn(service, 'patch').mockResolvedValue([1] as any);
    expect(await controller.patch('1', dto)).toEqual([1]);
  });

  it('remove um estoque', async () => {
    jest.spyOn(service, 'remove').mockResolvedValue(1 as any);
    expect(await controller.remove('1')).toEqual(1);
  });

  it('retorna estoques por farmacia', async () => {
    const data = [{ id: 1, farmaciaId: 5 }];
    jest.spyOn(service, 'findByFarmacia').mockResolvedValue(data as any);
    expect(await controller.findByFarmacia('5')).toEqual(data);
  });

  it('retorna estoques por remedio', async () => {
    const data = [{ id: 2, remedioId: 3 }];
    jest.spyOn(service, 'findByRemedio').mockResolvedValue(data as any);
    expect(await controller.findByRemedio('3')).toEqual(data);
  });
});
