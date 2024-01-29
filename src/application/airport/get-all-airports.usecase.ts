import { Injectable } from "@nestjs/common";
import Airport from "src/domain/airport/entities/airport";
import { MongoAirportRepository } from "src/infrastructure/airport/mongo-airport.repository";

@Injectable()
export class GetAllAirportsUseCase {
  constructor(private readonly airportRepository: MongoAirportRepository){}

  async execute(): Promise<Airport[]>{
    return await this.airportRepository.findAll();
  }
}