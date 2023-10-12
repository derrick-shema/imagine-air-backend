import { Schema, Document} from "mongoose";

export interface AirportDocument extends Document {
  airportName: string;
  airportIATA: string;
  city: string;
  city_code: string;
}

export const AirportSchema = new Schema<AirportDocument>({
  airportName: {
    type: String,
    required: true
  },
  airportIATA: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  city_code: {
    type: String,
    required: true
  }
})