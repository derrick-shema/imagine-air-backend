import { InjectModel } from "@nestjs/mongoose";
import FlightRepository from "src/domain/flight/repositories/flight.repository";
import { Flight as MongoFlight } from "./flight-schema";
import { Model } from "mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";
import Flight from "src/domain/flight/aggregates/flight";
import FlightId from "src/domain/flight/value-objects/flight-id";
import FlightName from "src/domain/flight/value-objects/flight-name";
import PlaneId from "src/domain/airplane/value-objects/plane-id";
import AirportId from "src/domain/airport/value-objects/airport-id";
import CrewMember from "src/domain/flight/entities/Crew";

@Injectable()
export class MongoFlightRepository implements FlightRepository {
  constructor(@InjectModel(MongoFlight.name) private readonly flightModel: Model<MongoFlight>){};
  
  async save(flight: Flight) {
    const flightId = flight.Id.getValue();
    const flightName = flight.getFlightName().getValue();
    const planeId = flight.getFlightPlaneId().getValue();
    const departureAirportId = flight.getDepartureAirportId().getValue();
    const arrivalAirportId = flight.getArrivalAirportId().getValue();
    const departureTime = flight.getDepartureTime();
    const arrivalTime = flight.getArrivalTime();
    
    const flightData = {
      flightId,
      flightName,
      planeId,
      departureAirportId,
      arrivalAirportId,
      departureTime,
      arrivalTime,
    }
    
    const newFlight = new this.flightModel(flightData);
    await newFlight.save();
  }

  async findAll(): Promise<Flight[]> {
    const flights = await this.flightModel.find().exec();
    return flights.map(flight => this.mapToDomain(flight));
  }

  async findOneById(id: string): Promise<Flight> {
    const flight = await this.flightModel.findById(id).exec();
    if (!flight) {
      throw new NotFoundException(`Flight with ID ${id} not found`);
    }
    return this.mapToDomain(flight);
  }

  private mapToDomain(flightModel: MongoFlight): Flight {
    return new Flight(
      FlightId.create('flightId',flightModel.flightId),
      FlightName.create('flightName',flightModel.flightName),
      PlaneId.create('planeId',flightModel.planeId),
      AirportId.create('departureAirportId', flightModel.departureAirportId),
      AirportId.create('arrivalAirportId', flightModel.arrivalAirportId),
      flightModel.departureTime,
      flightModel.arrivalTime,
      flightModel.crew,
      flightModel.passengers,
    );
  }
}