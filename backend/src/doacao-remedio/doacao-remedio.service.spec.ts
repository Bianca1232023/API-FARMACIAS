import { Test, TestingModule } from '@nestjs/testing';
import { DoacaoRemedioService } from './doacao-remedio.service';

describe('DoacaoRemedioService', () => {
  let service: DoacaoRemedioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoacaoRemedioService],
    }).compile();

    service = module.get<DoacaoRemedioService>(DoacaoRemedioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
