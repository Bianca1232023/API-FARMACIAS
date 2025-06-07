import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //await app.listen(process.env.PORT ?? 3000);

  app.enableCors({
    origin: 'http://localhost:3001', // se der erro, testar com *
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
   const config = new DocumentBuilder()
    .setTitle('API Farmácia Social')
    .setDescription('Documentação da API do sistema de farmácia social')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // A rota de acesso será /api

  await app.listen(3001);
}

bootstrap();



