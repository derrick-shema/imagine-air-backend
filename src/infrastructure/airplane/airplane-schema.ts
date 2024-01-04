import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CabinSection } from './cabin-section-schema';
import { HydratedDocument } from 'mongoose';

export type PlaneDocument = HydratedDocument<Plane>;

@Schema()
export class Plane {

  @Prop()
  planeId: string;

  @Prop()
  tailNumber: string;

  @Prop()
  planeIATACode: string;

  @Prop()
  maxCapacity: string;

  @Prop([CabinSection])
  cabinSections: CabinSection[];
}

export const AirplaneSchema = SchemaFactory.createForClass(Plane);