import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

describe('UsuariosController', () => {
  let controller: UsuariosController;
  let service: UsuariosService;

  const mockService = {
    create: jest.fn(dto => Promise.resolve({ id: Date.now(), ...dto })),
    findAll: jest.fn(() => Promise.resolve([])),
    findOne: jest.fn(id => Promise.resolve({ id: +id })),
    findByEmail: jest.fn(email => Promise.resolve({ email })),
    findFuncionarios: jest.fn(() => Promise.resolve([{ funcionario: true }])),
    findByFarmaciaId: jest.fn(farmaciaId => Promise.resolve([{ farmaciaId: +farmaciaId }])),
    update: jest.fn((id, dto) => Promise.resolve({ id: +id, ...dto })),
    patch: jest.fn((id, dto) => Promise.resolve({ id: +id, ...dto })),
    remove: jest.fn(id => Promise.resolve()),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosController],
      providers: [
        {
          provide: UsuariosService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<UsuariosController>(UsuariosController);
    service = module.get<UsuariosService>(UsuariosService);
  });

  it('deve estar definido', () => {
    expect(controller).toBeDefined();
  });

  it('criar um usuario', async () => {
    const dto: CreateUsuarioDto = {
      nome: 'Joao',
      cpf: '12345678901',
      email: 'joao@example.com',
      funcionario: true,
    };
    const resultado = await controller.create(dto);
    expect(resultado).toHaveProperty('id');
    expect(resultado.nome).toBe('Joao');
  });

  it('retornar todos os usuarios', async () => {
    const usuarios = await controller.findAll();
    expect(Array.isArray(usuarios)).toBe(true);
  });

  it('retornar um usuario específico pelo ID', async () => {
    const usuario = await controller.findOne('1');
    expect(usuario).toHaveProperty('id', 1);
  });

  it('atualizar um usuario', async () => {
    const atualizado = await controller.update('2', { nome: 'Carlos' });
    expect(atualizado?.nome).toBe('Carlos');
  });

  it('deletar um usuario', async () => {
    await expect(controller.remove('3')).resolves.toBeUndefined();
  });

  it('retornar um usuario pelo email', async () => {
    const usuario = await controller.findByEmail('testeemail@example.com');
    expect(usuario).toBeDefined();
    expect(usuario?.email).toBe('testeemail@example.com');
  });

  it('retornar todos os funcionarios', async () => {
    const funcionarios = await controller.findFuncionarios();
    expect(funcionarios.every(f => f.funcionario)).toBe(true);
  });

  it('retornar todos os usuarios por farmaciaId', async () => {
    const resultado = await controller.findByFarmaciaId('1');
    expect(resultado[0].farmaciaId).toBe(1);
  });

  it('atualizar parcialmente um usuario (patch)', async () => {
    const atualizado = await controller.patch('4', { funcionario: true });
    expect(atualizado?.funcionario).toBe(true);
  });
});
