import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SeatDocument = HydratedDocument<Seat>;

@Schema()
export class Seat {

  @Prop()
  seatId: string;

  @Prop()
  seatDesignation: string;
  
  @Prop()
  seatStatus: string;
}

export const SeatSchema = SchemaFactory.createForClass(Seat);