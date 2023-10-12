import { Schema, Document } from "mongoose";

export interface FlightCrewDocument extends Document {
  firstName: string;
  lastName: string;
  role: string;
}

export const FlightCrewSchema = new Schema<FlightCrewDocument>({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})