import { SeatDocument, SeatSchema } from "./seat-schema";
import { Schema} from "mongoose";

export interface CabinSectionDocument extends Document {
  sectionName: string;
  cabinSectionId: string;
  rows: number;
  arrangement: [number];
  seats: [SeatDocument]
}

export const CabinSectionSchema = new Schema<CabinSectionDocument>({
  sectionName: {
    type: String,
    required: true
  },
  cabinSectionId: {
    type: String,
    required: true
  },
  rows: {
    type: Number,
    required: true
  },
  arrangement: {
    type: [Number],
    required: true
  },
  seats: [SeatSchema]
})