import { Test, TestingModule } from '@nestjs/testing';
import { RemediosService } from './remedios.service';
import { getModelToken } from '@nestjs/sequelize';
import { Remedio } from './remedios.model';
import { Op } from 'sequelize';
import { NotFoundException } from '@nestjs/common';

describe('RemediosService', () => {
  let service: RemediosService;
  let mockRemedioModel: any;

  const mockRemedios = [
    { id: 1, nome: 'Puran T4', quantidade: '30', principio_ativo: 'Levotiroxina', categoria: 'Hormônios Tireoidianos', validade: new Date('2026-12-31'), save: jest.fn(), update: jest.fn() },
    { id: 2, nome: 'Dipirona', quantidade: '100', principio_ativo: 'Dipirona Sódica', categoria: 'Analgésicos', validade: new Date('2025-05-15'), save: jest.fn(), update: jest.fn() },
    { id: 3, nome: 'Amoxicilina', quantidade: '20', principio_ativo: 'Amoxicilina', categoria: 'Antibióticos', validade: new Date('2024-01-01'), save: jest.fn(), update: jest.fn() },
    { id: 4, nome: 'Ibuprofeno', quantidade: '75', principio_ativo: 'Ibuprofeno', categoria: 'Anti-inflamatórios', validade: new Date('2025-06-15'), save: jest.fn(), update: jest.fn() },
  ];

  beforeEach(async () => {
    mockRemedioModel = {
      create: jest.fn(dto => Promise.resolve({ id: 99, ...dto })),
      findAll: jest.fn().mockResolvedValue(mockRemedios),
      findByPk: jest.fn(id => Promise.resolve(mockRemedios.find(r => r.id === id) || null)),
      update: jest.fn().mockResolvedValue([1]),
      destroy: jest.fn().mockResolvedValue(1),
    };

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
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a remedio', async () => {
    const dto = { nome: 'Novo', quantidade: '50', principio_ativo: 'Ativo', categoria: 'Categoria', validade: new Date() };
    const result = await service.create(dto);
    expect(result).toHaveProperty('id');
    expect(mockRemedioModel.create).toHaveBeenCalledWith({ ...dto });
  });

  it('should list all remedios', async () => {
    const result = await service.findAll();
    expect(result.length).toBe(mockRemedios.length);
    expect(mockRemedioModel.findAll).toHaveBeenCalled();
  });

  it('should find one remedio by id', async () => {
    const result = await service.findOne(1);
    expect(result).toEqual(mockRemedios[0]);
    expect(mockRemedioModel.findByPk).toHaveBeenCalledWith(1);
  });

  it('should find by principio_ativo', async () => {
    mockRemedioModel.findAll.mockResolvedValueOnce([mockRemedios[0]]);
    const result = await service.findByPrincipio_Ativo('Levotiroxina');
    expect(result).toEqual([mockRemedios[0]]);
    expect(mockRemedioModel.findAll).toHaveBeenCalledWith({ where: { principio_ativo: 'Levotiroxina' } });
  });

  it('should find by categoria', async () => {
    mockRemedioModel.findAll.mockResolvedValueOnce([mockRemedios[1]]);
    const result = await service.findByCategoria('Analgésicos');
    expect(result).toEqual([mockRemedios[1]]);
    expect(mockRemedioModel.findAll).toHaveBeenCalledWith({ where: { categoria: 'Analgésicos' } });
  });

  it('should list all categorias without duplicates', async () => {
    const result = await service.listAllCategorias();
    const expected = Array.from(new Set(mockRemedios.map(r => r.categoria)));
    expect(result).toEqual(expected);
  });

  it('should find by nome', async () => {
    mockRemedioModel.findAll.mockResolvedValueOnce([mockRemedios[0]]);
    const result = await service.findByNome('Puran T4');
    expect(result).toEqual([mockRemedios[0]]);
    expect(mockRemedioModel.findAll).toHaveBeenCalledWith({ where: { nome: 'Puran T4' } });
  });

  it('should find expired remedios', async () => {
    const today = new Date();
    mockRemedioModel.findAll.mockImplementationOnce(({ where: { validade: { [Op.lt]: date } } }) => {
      return Promise.resolve(mockRemedios.filter(r => r.validade < date));
    });
    const result = await service.findExpiredRemedios();
    expect(result).toEqual(mockRemedios.filter(r => r.validade < today));
  });

  it('should find expiring remedios', async () => {
    const days = 30;
    mockRemedioModel.findAll.mockImplementationOnce(({ where: { validade: { [Op.between]: [start, end] } } }) => {
      return Promise.resolve(mockRemedios.filter(r => r.validade >= start && r.validade <= end));
    });
    const result = await service.findExpiringRemedios(days);
    expect(Array.isArray(result)).toBe(true);
    expect(mockRemedioModel.findAll).toHaveBeenCalled();
  });

  it('should update remedio', async () => {
    const dto = { quantidade: '45' };
    const result = await service.update(1, dto);
    expect(result).toEqual([1]);
    expect(mockRemedioModel.update).toHaveBeenCalledWith(dto, { where: { id: 1 } });
  });

  it('should update categoria', async () => {
    const remedio = { ...mockRemedios[0], save: jest.fn() };
    mockRemedioModel.findByPk.mockResolvedValueOnce(remedio);
    const result = await service.updateCategoria(1, 'Nova Categoria');
    expect(result.categoria).toBe('Nova Categoria');
    expect(remedio.save).toHaveBeenCalled();
  });

  it('should throw when updateCategoria finds no remedio', async () => {
    mockRemedioModel.findByPk.mockResolvedValueOnce(null);
    await expect(service.updateCategoria(999, 'Cat')).rejects.toThrow(NotFoundException);
  });

  it('should update all fields', async () => {
    const remedio = { ...mockRemedios[0], update: jest.fn().mockResolvedValue(true) };
    mockRemedioModel.findByPk.mockResolvedValueOnce(remedio);
    const dto = { nome: 'Novo Nome' };
    const result = await service.updateAll(1, dto);
    expect(remedio.update).toHaveBeenCalledWith(dto);
    expect(result).toBe(remedio);
  });

  it('should throw when updateAll finds no remedio', async () => {
    mockRemedioModel.findByPk.mockResolvedValueOnce(null);
    await expect(service.updateAll(999, {})).rejects.toThrow(NotFoundException);
  });

  it('should replace nome', async () => {
    const remedio = { ...mockRemedios[0], save: jest.fn() };
    mockRemedioModel.findByPk.mockResolvedValueOnce(remedio);
    const result = await service.replaceNome(1, 'Nome Novo');
    expect(remedio.nome).toBe('Nome Novo');
    expect(remedio.save).toHaveBeenCalled();
  });

  it('should throw when replaceNome finds no remedio', async () => {
    mockRemedioModel.findByPk.mockResolvedValueOnce(null);
    await expect(service.replaceNome(999, 'Nome')).rejects.toThrow(NotFoundException);
  });

  it('should remove remedio', async () => {
    const remedio = { destroy: jest.fn().mockResolvedValue(1) };
    mockRemedioModel.findByPk.mockResolvedValueOnce(remedio);
    const result = await service.remove(1);
    expect(remedio.destroy).toHaveBeenCalled();
    expect(result).toEqual({ message: 'Remédio removido' });
  });

  it('should throw when remove finds no remedio', async () => {
    mockRemedioModel.findByPk.mockResolvedValueOnce(null);
    await expect(service.remove(999)).rejects.toThrow(NotFoundException);
  });

  it('should remove expired remedios', async () => {
    const expired = mockRemedios.filter(r => r.validade < new Date());
    const expiredWithDestroy = expired.map(r => ({ ...r, destroy: jest.fn().mockResolvedValue(1) }));

    mockRemedioModel.findAll.mockResolvedValueOnce(expiredWithDestroy);

    const result = await service.removeExpiredRemedios();
    expect(result.message).toContain(`${expiredWithDestroy.length} remédio(s) vencido(s) removido(s)`);
    expiredWithDestroy.forEach(rem => expect(rem.destroy).toHaveBeenCalled());
  });

  it('should get all ordered by validade', async () => {
    mockRemedioModel.findAll.mockResolvedValueOnce([...mockRemedios].sort((a, b) => a.validade.getTime() - b.validade.getTime()));
    const result = await service.getAllOrderedByValidade();
    expect(result).toBeDefined();
    expect(mockRemedioModel.findAll).toHaveBeenCalledWith({ order: [['validade', 'ASC']] });
  });
});
