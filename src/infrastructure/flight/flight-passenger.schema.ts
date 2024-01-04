import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type FlightPassengerDocument = HydratedDocument<FlightPassenger>;

@Schema()
export class FlightPassenger{
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  seat: string;
}

export const FlightPassengerSchema = SchemaFactory.createForClass(FlightPassenger);