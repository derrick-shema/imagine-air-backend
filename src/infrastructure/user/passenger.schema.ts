import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from './user.schema';

@Schema({ collection: 'passengers' })
export class Passenger extends User {
  @Prop()
  bookingId: string;
}

export const PassengerSchema = SchemaFactory.createForClass(Passenger);
PassengerSchema.set('discriminatorKey', 'type');
