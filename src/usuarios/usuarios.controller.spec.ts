import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';


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

  it('definir o controlador', () => {
    expect(controller).toBeDefined();
  });

  it('criar um usuario', async () => {
    const dto: CreateUsuarioDto = {
      nome: 'Joao Silva',
      email: 'joao@example.com',
      funcionario: true,
    };
    const result = await controller.create(dto);
    expect(result).toHaveProperty('id');
    expect(result.nome).toBe('Joao Silva');
  });

  it('retornar todos os usuarios', async () => {
    const usuarios = await controller.findAll();
    expect(Array.isArray(usuarios)).toBe(true);
  });

  it('retornar um usuario pelo ID', async () => {
    const created = await controller.create({
      nome: 'Ana',
      email: 'ana@example.com',
      funcionario: false,
    });
    const usuario = await controller.findOne(created.id.toString());
    expect(usuario).toHaveProperty('id', created.id);
  });

  it('atualizar usuario', async () => {
    const created = await controller.create({
      nome: 'Carlos',
      email: 'carlos@example.com',
      funcionario: true,
    });
    const updated = await controller.update(created.id.toString(), {
      nome: 'Carlos Alberto',
    });
    expect(updated?.nome).toBe('Carlos Alberto');
  });

  it('deletar um usuario', async () => {
    const created = await controller.create({
      nome: 'Laura',
      email: 'laura@example.com',
      funcionario: false,
    });
    const result = await controller.remove(created.id.toString());
    expect(result).toBeUndefined(); 
  });

  it('retornar um usuario pelo email', async () => {
  const created = await controller.create({
    nome: 'Email Teste',
    email: 'emailteste@example.com',
    funcionario: false,
  });
  const usuario = await controller.findByEmail('emailteste@example.com');
  expect(usuario).toBeDefined();
  expect(usuario?.email).toBe('emailteste@example.com');
  });


  it('retornar apenas os usuarios que sao funcionarios', async () => {
    await controller.create({
      nome: 'Funcionario Teste',
      email: 'func@example.com',
      funcionario: true,
    });
    const funcionarios = await controller.findFuncionarios();
    expect(funcionarios.every(f => f.funcionario)).toBe(true);
  });

  it('retornar usuarios pelo ID da farmacia', async () => {
    await controller.create({
      nome: 'Farmacia1 usuario',
      email: 'f1@example.com',
      funcionario: false,
      farmaciaId: 1,
    });
    const result = await controller.findByFarmaciaId('1');
    expect(result[0].farmaciaId).toBe(1);
  });

  it('atualizar parcialmente um usuario (PATCH)', async () => {
    const created = await controller.create({
      nome: 'Parcial',
      email: 'patch@example.com',
      funcionario: false,
    });
    const patched = await controller.patch(created.id.toString(), { funcionario: true });
    expect(patched?.funcionario).toBe(true);
  });
});

@ApiTags('farmacias') // Categoria no Swagger
@Controller('farmacias')
export class FarmaciaController {
  @Get()
  @ApiOperation({ summary: 'Lista todas as farmácias' })
  findAll() {
    return [];
  }
}
