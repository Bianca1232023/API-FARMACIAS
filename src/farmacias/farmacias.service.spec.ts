/*
import { Test, TestingModule } from '@nestjs/testing';
import { FarmaciasService } from './farmacias.service';

describe('FarmaciasService', () => {
  let service: FarmaciasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FarmaciasService],
    }).compile();

    service = module.get<FarmaciasService>(FarmaciasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
*/

import { Test, TestingModule } from '@nestjs/testing';
import { FarmaciasService } from './farmacias.service';
import { getModelToken } from '@nestjs/sequelize';
import { Farmacia } from './farmacias.model';

describe('FarmaciasService', () => {
  let service: FarmaciasService;

  const mockFarmaciaModel = {
    create: jest.fn().mockResolvedValue({ id: 1, cep: '12345', cidade: 'Teste', bairro: 'Centro', logradouro: 'Rua X', numero: 100 }),
    findAll: jest.fn().mockResolvedValue([{ id: 1, cep: '12345', cidade: 'Teste', bairro: 'Centro', logradouro: 'Rua X', numero: 100 }]),
    findByPk: jest.fn().mockResolvedValue(null),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FarmaciasService,
        {
          provide: getModelToken(Farmacia),
          useValue: mockFarmaciaModel,
        },
      ],
    }).compile();

    service = module.get<FarmaciasService>(FarmaciasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a farmacia', async () => {
    const dto = {
      cep: '12345',
      cidade: 'Teste',
      bairro: 'Centro',
      logradouro: 'Rua X',
      numero: 100,
    };
    const result = await service.create(dto);
    expect(result).toHaveProperty('id');
    expect(mockFarmaciaModel.create).toHaveBeenCalledWith({ ...dto });
  });

  it('should list farmacias', async () => {
    const result = await service.findAll();
    expect(Array.isArray(result)).toBe(true);
    expect(mockFarmaciaModel.findAll).toHaveBeenCalled();
  });
});
