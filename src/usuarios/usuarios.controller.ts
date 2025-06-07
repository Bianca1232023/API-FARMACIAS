import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './usuarios.model';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.', type: Usuario })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiBody({ type: CreateUsuarioDto })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto as any);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso.', type: [Usuario] })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um usuário pelo ID' })
  @ApiResponse({ status: 200, description: 'Usuário encontrado.', type: Usuario })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @Get('email/:email')
  @ApiOperation({ summary: 'Busca usuário pelo e-mail' })
  @ApiResponse({ status: 200, description: 'Usuário encontrado com sucesso.', type: Usuario })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiParam({ name: 'email', type: String })
  findByEmail(@Param('email') email: string) {
    return this.usuariosService.findByEmail(email);
  }

  @Get('funcionarios')
  @ApiOperation({ summary: 'Retorna apenas usuários que são funcionários' })
  @ApiResponse({ status: 200, description: 'Usuários funcionários retornados.', type: [Usuario] })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  findFuncionarios() {
    return this.usuariosService.findFuncionarios();
  }

  @Get('farmacia/:id')
  @ApiOperation({ summary: 'Retorna usuários por ID da farmácia' })
  @ApiResponse({ status: 200, description: 'Usuários da farmácia encontrados.', type: [Usuario] })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiParam({ name: 'id', type: Number })
  findByFarmaciaId(@Param('id') id: string) {
    return this.usuariosService.findByFarmaciaId(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um usuário por completo' })
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso.', type: Usuario })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateUsuarioDto })
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza parcialmente um usuário' })
  @ApiResponse({ status: 200, description: 'Usuário atualizado parcialmente com sucesso.', type: Usuario })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateUsuarioDto })
  patch(@Param('id') id: string, @Body() data: Partial<UpdateUsuarioDto>) {
    return this.usuariosService.patch(+id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um usuário' })
  @ApiResponse({ status: 204, description: 'Usuário removido com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
