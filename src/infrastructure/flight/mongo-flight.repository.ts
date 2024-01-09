import { InjectModel } from "@nestjs/mongoose";
import FlightRepository from "src/domain/flight/repositories/flight.repository";
import { Flight as MongoFlight } from "./flight-schema";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import Flight from "src/domain/flight/aggregates/flight";

@Injectable()
export class MongoFlightRepository implements FlightRepository {
  constructor(@InjectModel(MongoFlight.name) private readonly flightModel: Model<MongoFlight>){};
  
  async save(flight: Flight) {
    const flightId = flight.Id.getValue();
    const flightName = flight.getFlightName().getValue();
    const flightPlaneId = flight.getFlightPlaneId().getValue();
    const departureAirportId = flight.getDepartureAirportId().getValue();
    const arrivalAirportId = flight.getArrivalAirportId().getValue();
    const departureTime = flight.getDepartureTime();
    const arrivalTime = flight.getArrivalTime();

    const flightData = {
      flightId,
      flightName,
      flightPlaneId,
      departureAirportId,
      arrivalAirportId,
      departureTime,
      arrivalTime,
    }
    
    const newFlight = new this.flightModel(flightData);
    await newFlight.save();
  }
}