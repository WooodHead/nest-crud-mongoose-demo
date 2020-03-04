import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

export class Cat {
  @ApiProperty()
  @prop({ required: true })
  name: string;

  @ApiProperty()
  @prop({ required: true })
  age: number;
}
