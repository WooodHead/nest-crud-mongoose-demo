import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Cat } from './cat.model';
import { CatsController } from './cats.controller';

@Module({
  imports: [TypegooseModule.forFeature([Cat])],
  providers: [CatsService],
  exports: [CatsService],
  controllers: [CatsController],
})
export class CatsModule {}
