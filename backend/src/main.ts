import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3001', // se der erro, testar com *
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
   const config = new DocumentBuilder()
    .setTitle('API Farmácia Social')
    .setDescription('Documentação da API do sistema de farmácia social')
    .setVersion('1.0')
    .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
    'jwt', 
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 

  await app.listen(3001);

  bootstrap();

}