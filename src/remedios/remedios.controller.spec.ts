import { Test, TestingModule } from '@nestjs/testing';
import { RemediosController } from './remedios.controller';
import { RemediosService } from './remedios.service';

describe('RemediosController', () => {
  let controller: RemediosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemediosController],
      providers: [RemediosService],
    }).compile();

    controller = module.get<RemediosController>(RemediosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
