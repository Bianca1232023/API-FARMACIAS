import { Controller, Get, Post, Body, Param, Put, Delete, Patch, UseGuards, Req } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './usuarios.model';
import { ExternalApiAuthGuard } from 'src/auth/external-api.guard';
import { ApiBearerAuth } from '@nestjs/swagger';


@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

    @UseGuards(ExternalApiAuthGuard)
    @ApiBearerAuth()
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuariosService.create(createUsuarioDto as any);
  }

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Usuario| null>  {
    return this.usuariosService.findOne(+id);
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string): Promise<Usuario | null> {
    return this.usuariosService.findByEmail(email);
  }

  @Get('funcionarios')
  findFuncionarios(): Promise<Usuario[]> {
    return this.usuariosService.findFuncionarios();
  }

  @Get('farmacia/:id')
  findByFarmaciaId(@Param('id') id: string): Promise<Usuario[]> {
  return this.usuariosService.findByFarmaciaId(+id);
  } 

    @UseGuards(ExternalApiAuthGuard)
  @ApiBearerAuth()
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario | null> {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

    @UseGuards(ExternalApiAuthGuard)
  @ApiBearerAuth()
  @Patch(':id')
  patch(@Param('id') id: string, @Body() data: Partial<UpdateUsuarioDto>): Promise<Usuario | null> {
    return this.usuariosService.patch(+id, data);
  }

    @UseGuards(ExternalApiAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usuariosService.remove(+id);
  }
}

