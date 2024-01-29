import { Injectable } from "@nestjs/common";
import Flight from "src/domain/flight/aggregates/flight";
import { MongoFlightRepository } from "src/infrastructure/flight/mongo-flight.repository";

@Injectable()
export class GetOneFlightsUseCase {
  constructor(private readonly flightRepository: MongoFlightRepository){}

  async execute(id: string): Promise<Flight>{
    return await this.flightRepository.findOneById(id);
  }
}