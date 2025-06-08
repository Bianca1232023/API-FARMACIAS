import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { firstValueFrom } from "rxjs/internal/firstValueFrom";

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  async login(email: string, senha: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.post('http://localhost:3000/auth/login', {
          email,
          senha,
        }),
      );
      return response.data;
    } catch (error) {
      throw new HttpException('Falha na autenticação', HttpStatus.UNAUTHORIZED);
    }
  }

  async validarToken(token: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.post('http://localhost:3000/auth/validate', {
          token,
        }),
      );
      return response.data;
    } catch (error) {
      throw new HttpException('Token inválido', HttpStatus.UNAUTHORIZED);
    }
  }
}

