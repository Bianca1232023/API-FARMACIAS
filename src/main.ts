import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Farmácias')
    .setDescription('Documentação da API de gerenciamento de farmácias')
    .setVersion('1.0')
    .addTag('farmacias')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // acessível em http://localhost:3000/api

  await app.listen(3000);
}
bootstrap();
