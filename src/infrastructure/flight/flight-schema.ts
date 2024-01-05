import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { FlightCrew } from './flight-crew.schema';
import { FlightPassenger } from './flight-passenger.schema';

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
  crew: FlightCrew[]

  @Prop()
  passengers: FlightPassenger[]
}

export const FlightSchema = SchemaFactory.createForClass(Flight);