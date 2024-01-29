import { Injectable } from "@nestjs/common";
import PlaneId from "src/domain/airplane/value-objects/plane-id";
import AirportId from "src/domain/airport/value-objects/airport-id";
import Flight from "src/domain/flight/aggregates/flight";
import FlightId from "src/domain/flight/value-objects/flight-id";
import FlightName from "src/domain/flight/value-objects/flight-name";
import { MongoFlightRepository } from "src/infrastructure/flight/mongo-flight.repository";
import { CreateFlightDto } from "src/modules/flight/dto/create-flight.dto";

@Injectable()
export class CreateFlightUseCase {
  constructor(private readonly flightRepository: MongoFlightRepository){}

  async execute(dto: CreateFlightDto): Promise<Flight> {
    const flight = Flight.create(
      FlightId.createUnique(),
      FlightName.create('flight name', dto.flightName),
      PlaneId.create('plane id', dto.planeId),
      AirportId.create('departure airportId', dto.departureAirportId),
      AirportId.create('arrival airportId', dto.arrivalAirportId),
      dto.departureTime,
      dto.arrivalTime
    )
    console.log(flight);
    console.log(dto);
    await this.flightRepository.save(flight);
    return flight;
  }
}