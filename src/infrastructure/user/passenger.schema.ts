import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PassengerDocument = HydratedDocument<Passenger>;

@Schema()
export class Passenger {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  hashedAndSaltedPassword: string;
  
  @Prop()
  bookingId: string;
}

export const PassengerSchema = SchemaFactory.createForClass(Passenger);
