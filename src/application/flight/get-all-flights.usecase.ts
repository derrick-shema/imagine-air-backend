import { Injectable } from "@nestjs/common";
import Flight from "src/domain/flight/aggregates/flight";
import { MongoFlightRepository } from "src/infrastructure/flight/mongo-flight.repository";

@Injectable()
export class GetAllFlightsUseCase {
  constructor(private readonly flightRepository: MongoFlightRepository){}

  async execute(): Promise<Flight[]>{
    return await this.flightRepository.findAll();
  }
}