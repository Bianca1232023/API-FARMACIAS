import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

//<<<<<<< HEAD
//git=======
import { AppModule } from './app.module';
//>>>>>>> origin/CRUD-Remedios-Bianca

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


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API - Farmácias Sociais Digitais')
    .setDescription('Documentação da API para o sistema de Farmácias Gigitais Sociais')
    .setVersion('1.0')
    .addBearerAuth() 
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // acessa em http://localhost:3000/api

  await app.listen(3000);

}
bootstrap();

}