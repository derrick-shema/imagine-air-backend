import { Injectable } from "@nestjs/common";
import Airport from "src/domain/airport/entities/airport";
import IATA from "src/domain/airport/value-objects/IATA-code";
import AirportId from "src/domain/airport/value-objects/airport-id";
import AirportName from "src/domain/airport/value-objects/airport-name";
import CityCode from "src/domain/airport/value-objects/city-code";
import CityName from "src/domain/airport/value-objects/city-name";
import { MongoAirportRepository } from "src/infrastructure/airport/mongo-airport.repository";
import { RegisterAirportDto } from "src/modules/airport/dtos/register-airport.dto";

@Injectable()
export class RegisterAirportUseCase {
  constructor(private airportRepository: MongoAirportRepository){}
  async execute(dto: RegisterAirportDto): Promise<Airport>{
    const airport = Airport.create(
      AirportId.createUnique(),
      AirportName.create('airport-name', dto.airportName),
      IATA.create('airport-IATA', dto.airportIATA),
      CityName.create('city', dto.city),
      CityCode.create('city-code', dto.city_code)
    )
    await this.airportRepository.save(airport);
    return airport
  }
}