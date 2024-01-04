import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { FlightCrew } from './flight-crew.schema';

export type FlightDocument = HydratedDocument<Flight>;

@Schema()
export class Flight {
  @Prop()
  flightId: string;

  @Prop()
  flightName: string;

  @Prop()
  planeId: string;

  @Prop()
  departureAirportId: string;

  @Prop()
  arrivalAirportId: string;

  @Prop()
  departureTime: Date;

  @Prop()
  arrivalTime: Date

  @Prop()
  crew: FlightCrew[]
}

export const FlightSchema = SchemaFactory.createForClass(Flight);