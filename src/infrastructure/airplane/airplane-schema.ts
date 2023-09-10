import { Schema, model, Document } from "mongoose";
import { CabinSectionDocument, CabinSectionSchema } from "./cabin-section-schema";

export interface AirplaneDocument extends Document {
  // Properties matching your entity and value objects
  planeId: string;
  tailNumber: string;
  planeIATACode: string;
  maxCapacity: number;
  cabinSections: [CabinSectionDocument]
}

export const AirplaneSchema = new Schema<AirplaneDocument>({
  // Define schema properties
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
});

export const AirplaneModel = model<AirplaneDocument>('Airplane', AirplaneSchema);