import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from './user.schema';

@Schema({ collection: 'staff' })
export class Staff extends User {
  @Prop()
  role: string;

  @Prop()
  title: string;
}

export const StaffSchema = SchemaFactory.createForClass(Staff);
StaffSchema.set('discriminatorKey', 'type');

