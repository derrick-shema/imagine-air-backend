import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FlightCrewDocument = HydratedDocument<FlightCrew>;

@Schema()
export class FlightCrew {
  @Prop()
  firstName: string;

  @Prop() 
  lastName: string;

  @Prop()
  role: string
}

export const FlightCrewSchema = SchemaFactory.createForClass(FlightCrew);

