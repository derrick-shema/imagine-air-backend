import { Schema } from "mongoose";
import SeatStatus from "src/domain/airplane/enums/seat-status";

export interface SeatDocument extends Document {
  // Properties matching your entity and value objects
  seatId: string;
  seatDesignation: string;
  status: number;
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
  status: {
    type: Number,
    required: true
  }
})