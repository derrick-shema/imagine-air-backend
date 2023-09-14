import { SeatSchema } from "./seat-schema";
import { Schema, Prop } from "@nestjs/mongoose";
import CabinSection from "src/domain/airplane/aggregates/cabin-section";

// export interface CabinSectionDocument extends Document {
//   // Properties matching your entity and value objects
//   sectionName: string;
//   cabinSectionId: string;
//   rows: number;
//   arrangement: [number];
//   seats: [SeatDocument]
// }

// export const CabinSectionSchema = new Schema<CabinSectionDocument>({
//   sectionName: {
//     type: String,
//     required: true
//   },
//   cabinSectionId: {
//     type: String,
//     required: true
//   },
//   rows: {
//     type: Number,
//     required: true
//   },
//   arrangement: {
//     type: [Number],
//     required: true
//   },
//   seats: [SeatSchema]
// })
@Schema()
export class CabinSectionSchema {
  @Prop({required: true})
  sectionName: string;

  @Prop({required: true})
  cabinSectionId: string;

  @Prop({required: true})
  rows: string;

  @Prop({required: true})
  arrangement: number;

  @Prop({required: true})
  seats: SeatSchema[];
}