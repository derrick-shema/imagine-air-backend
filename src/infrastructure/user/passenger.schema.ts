import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from './user.schema';

@Schema({ collection: 'passengers' })
export class Passenger extends User {
  @Prop()
  seat: string;
}

export const PassengerSchema = SchemaFactory.createForClass(Passenger);
PassengerSchema.set('discriminatorKey', 'type');
