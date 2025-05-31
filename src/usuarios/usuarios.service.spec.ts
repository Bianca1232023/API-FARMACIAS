import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

describe('UsuariosController', () => {
  let controller: UsuariosController;
  let service: UsuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosController],
      providers: [UsuariosService],
    }).compile();

    controller = module.get<UsuariosController>(UsuariosController);
    service = module.get<UsuariosService>(UsuariosService);
  });

  it('deve estar definido', () => {
    expect(controller).toBeDefined();
  });

  it('criar um usuario', async () => {
    const dto: CreateUsuarioDto = {
      nome: 'Joao Silva',
      email: 'joao@example.com',
      funcionario: true,
    };
    const resultado = await controller.create(dto);
    expect(resultado).toHaveProperty('id');
    expect(resultado.nome).toBe('João Silva');
  });

  it('retornar todos os usuarios', async () => {
    await controller.create({
      nome: 'Teste',
      email: 'teste@example.com',
      funcionario: false,
    });
    const usuarios = await controller.findAll();
    expect(Array.isArray(usuarios)).toBe(true);
  });

  it('retornar um usuario específico pelo ID', async () => {
    const criado = await controller.create({
      nome: 'Ana',
      email: 'ana@example.com',
      funcionario: false,
    });
    const usuario = await controller.findOne(criado.id.toString());
    expect(usuario).toHaveProperty('id', criado.id);
  });

  it('atualizar um usuario', async () => {
    const criado = await controller.create({
      nome: 'Carlos',
      email: 'carlos@example.com',
      funcionario: true,
    });
    const atualizado = await controller.update(criado.id.toString(), {
      nome: 'Carlos Alberto',
    });
    expect(atualizado?.nome).toBe('Carlos Alberto');
  });

  it('deletar um usuario', async () => {
    const criado = await controller.create({
      nome: 'Laura',
      email: 'laura@example.com',
      funcionario: false,
    });
    await controller.remove(criado.id.toString());
    const resultado = await controller.findOne(criado.id.toString());
    expect(resultado).toBeNull(); 
  });

  it('retornar um usuario pelo email', async () => {
  const criado = await controller.create({
    nome: 'Teste Email',
    email: 'testeemail@example.com',
    funcionario: true,
  });
  const usuario = await controller.findByEmail('testeemail@example.com');
  expect(usuario).toBeDefined();
  expect(usuario?.email).toBe('testeemail@example.com');
  });

  it('retornar todos os funcionarios', async () => {
    await controller.create({
      nome: 'Funcionario Teste',
      email: 'func@example.com',
      funcionario: true,
    });
    const funcionarios = await controller.findFuncionarios();
    expect(funcionarios.every(f => f.funcionario)).toBe(true);
  });

  it('retornar todos os usuarios por farmaciaId', async () => {
    const usuario = await controller.create({
      nome: 'Farmacia1 usuario',
      email: 'f1@example.com',
      funcionario: false,
      farmaciaId: 1,
    });
    const resultado = await controller.findByFarmaciaId('1');
    expect(resultado[0].farmaciaId).toBe(1);
  });

  it('atualizar parcialmente um usuario (patch)', async () => {
    const criado = await controller.create({
      nome: 'Parcial',
      email: 'patch@example.com',
      funcionario: false,
    });
    const atualizado = await controller.patch(criado.id.toString(), { funcionario: true });
    expect(atualizado?.funcionario).toBe(true);
  });
});
