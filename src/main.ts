import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { mongoose, LogLevels, setLogLevel } from '@typegoose/typegoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  const options = new DocumentBuilder()
    .setTitle('Pet Store')
    .setDescription('The Pet Store API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  mongoose.set('debug', true);
  setLogLevel(LogLevels.DEBUG); 

  await app.listen(3000);
}
bootstrap();
