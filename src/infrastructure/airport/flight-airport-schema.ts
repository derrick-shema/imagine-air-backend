import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type FlightAirportDocument = HydratedDocument<FlightAirport>;

@Schema()
export class FlightAirport {
  @Prop()
  airportName: string;

  @Prop()
  airportIATA: string;

  @Prop()
  city: string;

  @Prop()
  city_code: string;
}

export const FlightAirportSchema = SchemaFactory.createForClass(FlightAirport);