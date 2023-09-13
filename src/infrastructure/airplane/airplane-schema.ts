import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { CabinSectionDocument, CabinSectionSchema } from "./cabin-section-schema";
import CabinSection from "src/domain/airplane/aggregates/cabin-section";

// export interface AirplaneDocument extends Document {
//   // Properties matching your entity and value objects
//   planeId: string;
//   tailNumber: string;
//   planeIATACode: string;
//   maxCapacity: number;
//   cabinSections: [CabinSectionDocument]
// }

// export const AirplaneSchema = new Schema<AirplaneDocument>({
//   // Define schema properties
//   planeId: {
//     type: String,
//     required: true
//   },
//   tailNumber: {
//     type: String,
//     required: true
//   },
//   planeIATACode: {
//     type: String,
//     required: true
//   },
//   maxCapacity: {
//     type: Number,
//     required: true
//   },
//   cabinSections: [CabinSectionSchema]
// });

// export const AirplaneModel = model<AirplaneDocument>('Airplane', AirplaneSchema);
export type AirplaneDocument = Plane & Document;

@Schema()
export class Plane {
  @Prop({required: true})
  planeId: string;

  @Prop({required: true})
  tailNumber: string;

  @Prop({required: true})
  planeIATACode: string;

  @Prop({required: true})
  maxCapacity: number;

  @Prop({required: true})
  cabinSections: [CabinSection];
}

export const AirplaneSchema = SchemaFactory.createForClass(Plane);