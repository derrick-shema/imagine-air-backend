import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FlightDocument = HydratedDocument<Flight>;

@Schema()
export class Flight {
  @Prop()
  flightId: string;

  @Prop()
  flightName: string;

  @Prop()
  flightPlaneId: string;

  @Prop()
  departureAirportId: string;

  @Prop()
  arrivalAirportId: string;

  @Prop()
  departureTime: Date;

  @Prop()
  arrivalTime: Date

  @Prop()
  crew: string[]

  @Prop()
  passengers: string[]
}

export const FlightSchema = SchemaFactory.createForClass(Flight);