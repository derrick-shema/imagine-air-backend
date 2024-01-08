import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from './user.schema';

@Schema({ collection: 'crew' })
export class Crew extends User {
  @Prop()
  role: string;
}

export const CrewSchema = SchemaFactory.createForClass(Crew);
CrewSchema.set('discriminatorKey', 'type');

