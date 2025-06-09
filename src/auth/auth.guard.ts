import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('exemplo')
export class ExemploController {
  @UseGuards(JwtAuthGuard)
  @Get('protegido')
  getProtegido() {
    return { mensagem: 'Rota protegida!' };
  }
}
