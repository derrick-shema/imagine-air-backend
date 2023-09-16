import { Schema } from "mongoose";

export interface SeatDocument extends Document {
  seatId: string;
  seatDesignation: string;
  seatStatus: string;
}

export const SeatSchema = new Schema<SeatDocument>({
  seatId: {
    type: String,
    required: true
  },
  seatDesignation: {
    type: String,
    required: true
  },
  seatStatus: {
    type: String,
    required: true
  }
})