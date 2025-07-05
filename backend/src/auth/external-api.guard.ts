import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class ExternalApiAuthGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException(
        'Token de autorização não encontrado ou mal formatado.',
      );
    }

    const token = authHeader.split(' ')[1];

    try {
      //chamada para a API do outro grupo para validar o token usando fetch
      const response = await fetch('http://localhost:3000/auth/validate', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

        request.user = data;

        return true;
      } else {
        throw new UnauthorizedException('Token inválido ou sessão expirada.');
      }
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException(
        'Erro ao conectar com o serviço de autenticação.',
      );
    }
  }
}
