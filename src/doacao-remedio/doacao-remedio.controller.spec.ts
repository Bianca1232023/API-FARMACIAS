import { Test, TestingModule } from '@nestjs/testing';
import { DoacaoRemedioController } from './doacao-remedio.controller';
import { DoacaoRemedioService } from './doacao-remedio.service';

describe('DoacaoRemedioController', () => {
  let controller: DoacaoRemedioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoacaoRemedioController],
      providers: [DoacaoRemedioService],
    }).compile();

    controller = module.get<DoacaoRemedioController>(DoacaoRemedioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
