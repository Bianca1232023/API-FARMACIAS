import { Test, TestingModule } from '@nestjs/testing';
import { ReceitaController } from './receita.controller';
import { ReceitaService } from './receita.service';

describe('ReceitaController', () => {
  let controller: ReceitaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceitaController],
      providers: [
        {
          provide: ReceitaService,
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

    controller = module.get<ReceitaController>(ReceitaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
