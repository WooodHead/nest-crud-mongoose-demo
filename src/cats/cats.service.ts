import { Injectable } from '@nestjs/common';
import { Cat } from './cat.model';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { MongooseCrudService } from 'nest-crud-mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class CatsService extends MongooseCrudService<
  DocumentType<Cat>
> {
  constructor(@InjectModel(Cat) public repo: ModelType<Cat>) {
    super(repo);
  }
}
