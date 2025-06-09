import { Injectable, UnauthorizedException } from '@nestjs/common';
import fetch from 'node-fetch'; 

@Injectable()
export class AuthService {

  async validateUser(email: string, senha: string) {
    const res = await fetch('http://localhost:3000/validate', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });

    if (!res.ok) {
        throw new UnauthorizedException('Credenciais inválidas');
    }

    const data = await res.json();
    return data;
  }

  async login(user: any) {
    return {
      access_token: user.token,
    };
  }
}