import { Schema, model} from "mongoose";
import { Document } from "mongoose";
import { CabinSectionDocument, CabinSectionSchema } from "./cabin-section-schema";

export interface AirplaneDocument extends Document {
  planeId: string;
  tailNumber: string;
  planeIATACode: string;
  maxCapacity: number;
  cabinSections: [CabinSectionDocument]
}

export const AirplaneSchema = new Schema<AirplaneDocument>({
  planeId: {
    type: String,
    required: true
  },
  tailNumber: {
    type: String,
    required: true
  },
  planeIATACode: {
    type: String,
    required: true
  },
  maxCapacity: {
    type: Number,
    required: true
  },
  cabinSections: [CabinSectionSchema]
}, {collection: 'airplanes'});

export const AirplaneModel = model<AirplaneDocument>('Airplane', AirplaneSchema);