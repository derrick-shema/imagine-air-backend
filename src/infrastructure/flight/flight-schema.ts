import { Schema, Document, model } from "mongoose";
import { AirplaneDocument, AirplaneSchema } from "../airplane/airplane-schema";
import { AirportDocument, AirportSchema } from "./flight-airport-schema";
import { FlightCrewDocument, FlightCrewSchema } from "./flight-crew.schema";
import { FlightPassengerDocument, FlightPassengerSchema } from "./flight-passenger.schema";

export interface FlightDocument extends Document {
  flightId: string;
  flightName: string;
  plane: AirplaneDocument;
  departureAirport: AirportDocument;
  arrivalAirport: AirportDocument;
  departureTime: Date;
  arrivalTime: Date;
  crew: [FlightCrewDocument];
  passengers: [FlightPassengerDocument];
}

export const FlightSchema = new Schema<FlightDocument>({
  flightId: {
    type: String,
    required: true
  },
  flightName: {
    type: String,
    required: true
  },
  plane: AirplaneSchema,
  departureAirport: AirportSchema,
  arrivalAirport: AirportSchema,
  departureTime: Date,
  arrivalTime: Date,
  crew: [FlightCrewSchema],
  passengers: [FlightPassengerSchema]
}, {collection: 'flights'});

export const FlightModel = model<FlightDocument>('Flight', FlightSchema);