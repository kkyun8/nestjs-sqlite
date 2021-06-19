import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger start
  const config = new DocumentBuilder()
    .setTitle('nestjs-sqlite')
    .setDescription('test')
    .setVersion('1.0')
    .addTag('tag')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // swagger url http://localhost:3000/api/#/
  // swagger end

  await app.listen(3000);
}
bootstrap();
