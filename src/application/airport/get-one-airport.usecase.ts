import { Injectable } from "@nestjs/common";
import Airport from "src/domain/airport/entities/airport";
import { MongoAirportRepository } from "src/infrastructure/airport/mongo-airport.repository";

@Injectable()
export class GetOneAirportUseCase {
  constructor(private readonly airportRepository: MongoAirportRepository){}

  async execute(id: string): Promise<Airport>{
    return await this.airportRepository.findOneById(id);
  }
}