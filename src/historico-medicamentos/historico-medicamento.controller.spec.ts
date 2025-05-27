import { Test, TestingModule } from '@nestjs/testing';
import { HistoricoMedicamentoController } from './historico-medicamento.controller';
import { HistoricoMedicamentoService } from './historico-medicamento.service';

describe('HistoricoMedicamentoController', () => {
  let controller: HistoricoMedicamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoricoMedicamentoController],
      providers: [
        {
          provide: HistoricoMedicamentoService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<HistoricoMedicamentoController>(HistoricoMedicamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
