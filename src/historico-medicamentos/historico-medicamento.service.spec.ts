import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { HistoricoMedicamento } from './historico-medicamento.model';
import { HistoricoMedicamentoService } from './historico-medicamento.service';

describe('HistoricoMedicamentoService', () => {
  let service: HistoricoMedicamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HistoricoMedicamentoService,
        {
          provide: getModelToken(HistoricoMedicamento),
          useValue: {
            create: jest.fn(),
            findByPk: jest.fn(),
            findAll: jest.fn(),
            update: jest.fn(),
            destroy: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<HistoricoMedicamentoService>(HistoricoMedicamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
