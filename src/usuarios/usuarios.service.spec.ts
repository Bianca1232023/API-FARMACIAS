import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosService } from './usuarios.service';


describe('UsuariosService', () => {
  let service: UsuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosService],
    }).compile();

    service = module.get<UsuariosService>(UsuariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a usuario', () => {
    const dto = {
      nome: 'Maria dos Anjos',
      email: 'maria@example.com',
      senha: 'senha123',
      funcionario: true,
    };

    const result = service.create(dto);
    expect(result).toHaveProperty('id');
    expect(result.nome).toBe('Maria dos Anjos');
  });

  it('should list usuarios', () => {
    const dto = {
      nome: 'Maria dos Anjos',
      email: 'maria@example.com',
      senha: 'senha123',
      funcionario: true,
    };

    service.create(dto);
    const result = service.findAll();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);
  });
});
