import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Avenger extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  universe: string;
}

export const AvengerSchema = SchemaFactory.createForClass(Avenger);
