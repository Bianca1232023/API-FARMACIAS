import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ExternalApiAuthGuard } from './external-api.guard';

@Module({
  imports: [
  ],
  providers: [AuthService, ExternalApiAuthGuard],
  exports: [AuthService, ExternalApiAuthGuard],
})
export class AuthModule {}