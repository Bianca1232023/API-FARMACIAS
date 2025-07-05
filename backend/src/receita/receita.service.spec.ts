import { Test, TestingModule } from '@nestjs/testing';
import { ReceitaService } from './receita.service';
import { getModelToken } from '@nestjs/sequelize';
import { Receita } from './receita.model';

describe('ReceitaService', () => {
  let service: ReceitaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReceitaService,
        {
          provide: getModelToken(Receita),
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            destroy: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ReceitaService>(ReceitaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
