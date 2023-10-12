import { Schema, Document } from "mongoose";

export interface FlightPassengerDocument extends Document {
  firstName: string;
  lastName: string;
  seat: string;
}

export const FlightPassengerSchema = new Schema<FlightPassengerDocument>({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  seat: {
    type: String,
    required: true
  }
})