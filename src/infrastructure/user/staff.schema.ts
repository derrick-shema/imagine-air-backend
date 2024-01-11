import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type StaffDocument = HydratedDocument<Staff>;

@Schema()
export class Staff {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  hashedAndSaltedPassword: string;
  
  @Prop()
  role: string;

  @Prop()
  title: string;
}

export const StaffSchema = SchemaFactory.createForClass(Staff);

