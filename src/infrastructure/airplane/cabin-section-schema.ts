import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Seat } from './seat-schema';
import { HydratedDocument } from 'mongoose';

export type CabinSectionDocument = HydratedDocument<CabinSection>;

@Schema()
export class CabinSection {

  @Prop()
  cabinSectionId: string;

  @Prop()
  cabinSectionName: string;

  @Prop()
  rows: number;

  @Prop()
  arrangement: number[];

  @Prop([Seat])
  seats: Seat[];
}

export const CabinSectionSchema = SchemaFactory.createForClass(CabinSection);