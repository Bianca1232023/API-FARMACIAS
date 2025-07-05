import { Test, TestingModule } from '@nestjs/testing';
import { EstoqueService } from './estoque.service';
import { getModelToken } from '@nestjs/sequelize';
import { Estoque } from './estoque.model';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('EstoqueService', () => {
  let service: EstoqueService;
  let mockEstoqueModel: any;

  beforeEach(async () => {
    mockEstoqueModel = {
      create: jest.fn(),
      findAll: jest.fn(),
      findByPk: jest.fn(),
      findOne: jest.fn(),
      destroy: jest.fn(),
      update: jest.fn(),
      findByFarmacia: jest.fn(),
      findByRemedio: jest.fn(),
      doarMedicamento: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EstoqueService,
        { provide: getModelToken(Estoque), useValue: mockEstoqueModel },
      ],
    }).compile();

    service = module.get<EstoqueService>(EstoqueService);
  });

  it('deve ser definido', () => {
    expect(service).toBeDefined();
  });

  it('cria um novo estoque', async () => {
    const dto = { farmaciaId: 1, remedioId: 2, quantidade_disponivel: 10 };
    mockEstoqueModel.create.mockResolvedValue(dto);
    expect(await service.create(dto)).toEqual(dto);
    expect(mockEstoqueModel.create).toHaveBeenCalledWith(dto);
  });

  it('retorna todos os estoques', async () => {
    const data = [{ id: 1 }, { id: 2 }];
    mockEstoqueModel.findAll.mockResolvedValue(data);
    expect(await service.findAll()).toEqual(data);
  });

  it('retorna estoque por id', async () => {
    const data = { id: 1 };
    mockEstoqueModel.findByPk.mockResolvedValue(data);
    expect(await service.findOne(1)).toEqual(data);
  });

  it('retorna erro se estoque não encontrado', async () => {
    mockEstoqueModel.findByPk.mockResolvedValue(null);
    await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
  });

  it('atualiza estoque (PUT)', async () => {
    const dto = { quantidade_disponivel: 6 };
    mockEstoqueModel.update.mockResolvedValue([1]);
    expect(await service.update(1, dto)).toEqual([1]);
    expect(mockEstoqueModel.update).toHaveBeenCalledWith(dto, {
      where: { id: 1 },
    });
  });

  it('atualiza estoque (PATCH)', async () => {
    const dto = { quantidade_disponivel: 4 };
    mockEstoqueModel.update.mockResolvedValue([1]);
    expect(await service.patch(1, dto)).toEqual([1]);
    expect(mockEstoqueModel.update).toHaveBeenCalledWith(dto, {
      where: { id: 1 },
    });
  });

  it('remove estoque', async () => {
    const estoque = { destroy: jest.fn().mockResolvedValue(undefined) };
    jest.spyOn(service, 'findOne').mockResolvedValue(estoque as any);
    expect(await service.remove(1)).toEqual({
      message: 'Estoque removido com sucesso',
    });
    expect(estoque.destroy).toHaveBeenCalled();
  });

  it('filtra por farmacia', async () => {
    const data = [{ id: 5, farmaciaId: 2 }];
    mockEstoqueModel.findAll.mockResolvedValue(data);
    expect(await service.findByFarmacia(2)).toEqual(data);
    expect(mockEstoqueModel.findAll).toHaveBeenCalledWith({
      where: { farmaciaId: 2 },
    });
  });

  it('filtra por remedio', async () => {
    const data = [{ id: 6, remedioId: 9 }];
    mockEstoqueModel.findAll.mockResolvedValue(data);
    expect(await service.findByRemedio(9)).toEqual(data);
    expect(mockEstoqueModel.findAll).toHaveBeenCalledWith({
      where: { remedioId: 9 },
    });
  });

  //Regra de negócio: Uma farmácia só pode doar medicamentos que estejam em estoque.
  describe('doarMedicamento', () => {
    it('retorna null se não houver estoque', async () => {
      mockEstoqueModel.findOne.mockResolvedValue(null);
      const result = await service.doarMedicamentoEstoque(1, 1, 5);
      expect(result).toBeNull();
    });

    //Regra de negócio: O medicamento doado deve ter quantidade suficiente em estoque para atender à solicitação.
    it('retorna null se a quantidade for insuficiente', async () => {
      const estoque = { quantidade_disponivel: 3 };
      mockEstoqueModel.findOne.mockResolvedValue(estoque);
      const result = await service.doarMedicamentoEstoque(1, 1, 5);
      expect(result).toBeNull();
    });

    //Regra de negócio: Após cada doação, o sistema deve atualizar automaticamente o estoque da farmácia.
    it('realiza a doação e atualiza o estoque', async () => {
      const estoque = {
        quantidade_disponivel: 10,
        save: jest.fn().mockResolvedValue(undefined),
      };
      mockEstoqueModel.findOne.mockResolvedValue(estoque);
      const result = await service.doarMedicamentoEstoque(1, 1, 4);
      expect(estoque.quantidade_disponivel).toBe(6);
      expect(estoque.save).toHaveBeenCalled();
      expect(result.message).toBe(
        'Doação realizada com sucesso e estoque atualizado.',
      );
    });
  });
});
