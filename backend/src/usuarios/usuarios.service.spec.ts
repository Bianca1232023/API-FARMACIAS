import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

describe('UsuariosController', () => {
  let controller: UsuariosController;
  let service: UsuariosService;

  beforeEach(async () => {
    const mockService = {
      create: jest.fn((dto) => {
        if (!dto.cpf || !dto.email) {
          throw new Error('CPF e Email são obrigatórios');
        }
        if (dto.cpf === '123') {
          throw new Error('CPF já cadastrado');
        }
        return { id: Date.now(), ...dto };
      }),
      findAll: jest.fn(() => Promise.resolve([])),
      findOne: jest.fn((id) => Promise.resolve({ id: Number(id) })),
      update: jest.fn((id, dto) => Promise.resolve({ id: Number(id), ...dto })),
      remove: jest.fn((id) => {
        if (id === '5') {
          return Promise.reject(new Error('Funcionário não pode ser removido'));
        }
        return Promise.resolve();
      }),
      findByEmail: jest.fn((email) => Promise.resolve({ email })),
      findFuncionarios: jest.fn(() => Promise.resolve([{ funcionario: true }])),
      findByFarmaciaId: jest.fn((farmaciaId) =>
        Promise.resolve([{ farmaciaId: Number(farmaciaId) }]),
      ),
      patch: jest.fn((id, dto) => Promise.resolve({ id: Number(id), ...dto })),
    };

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

  it('Definir o controlador', () => {
    expect(controller).toBeDefined();
  });

  it('Criar um usuario', async () => {
    const dto: CreateUsuarioDto = {
      nome: 'Joao',
      cpf: '12345678901',
      email: 'joao@example.com',
      funcionario: true,
    };
    const result = await controller.create(dto);
    expect(result).toHaveProperty('id');
    expect(result.nome).toBe('Joao');
  });

  it('Retornar todos os usuarios', async () => {
    const usuarios = await controller.findAll();
    expect(Array.isArray(usuarios)).toBe(true);
  });

  it('Retornar um usuario pelo ID', async () => {
    const usuario = await controller.findOne('1');
    expect(usuario).toHaveProperty('id', 1);
  });

  it('Atualizar usuario', async () => {
    const updated = await controller.update('2', { nome: 'Carlos' });
    expect(updated?.nome).toBe('Carlos');
  });

  it('Deletar um usuario', async () => {
    const result = await controller.remove('3');
    expect(result).toBeUndefined();
  });

  it('Retornar um usuario pelo email', async () => {
    const usuario = await controller.findByEmail('emailteste@example.com');
    expect(usuario).toBeDefined();
    expect(usuario?.email).toBe('emailteste@example.com');
  });

  it('Retornar apenas os usuarios que sao funcionarios', async () => {
    const funcionarios = await controller.findFuncionarios();
    expect(funcionarios.every((f) => f.funcionario)).toBe(true);
  });

  it('Retornar usuarios pelo ID da farmacia', async () => {
    const result = await controller.findByFarmaciaId('1');
    expect(result[0].farmaciaId).toBe(1);
  });

  it('Atualizar parcialmente um usuario (PATCH)', async () => {
    const patched = await controller.patch('4', { funcionario: true });
    expect(patched?.funcionario).toBe(true);
  });

  // Regra de negócio: CPF e email são obrigatórios para cadastro completo
  it('Deve lançar erro ao cadastrar usuário sem CPF ou email', async () => {
    const dto: any = { nome: 'Fulano', funcionario: false };
    await expect(controller.create(dto)).rejects.toThrow(
      'CPF e Email são obrigatórios',
    );
  });

  // REGRA DE NEGÓCIO: Evitar duplicidade de CPF.
  it('Deve lançar erro ao tentar cadastrar CPF já existente', async () => {
    await expect(
      controller.create({
        nome: 'Fulano',
        cpf: '123',
        email: 'a@a.com',
        funcionario: false,
      } as any),
    ).rejects.toThrow('CPF já cadastrado');
  });
});
