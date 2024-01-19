import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type FlightAirportDocument = HydratedDocument<Airport>;

@Schema()
export class Airport {
  @Prop()
  airportName: string;

  @Prop()
  airportIATA: string;

  @Prop()
  city: string;

  @Prop()
  city_code: string;
}

export const AirportSchema = SchemaFactory.createForClass(Airport);