import { Injectable } from "@nestjs/common";
import { MongoFlightRepository } from "src/infrastructure/flight/mongo-flight.repository";

@Injectable()
export class GetAllFlightsUseCase {
  constructor(private readonly flightRepository: MongoFlightRepository){}

  async execute(){
    await this.flightRepository.findAll();
  }
}