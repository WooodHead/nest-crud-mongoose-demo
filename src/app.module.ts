import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [CatsModule, TypegooseModule.forRoot('mongodb://localhost:27017/pet-store')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
