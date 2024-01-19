import { Injectable } from "@nestjs/common";
import { RegisterAirportUseCase } from "src/application/airport/register-airport.usecase";
import { RegisterAirportDto } from "./dtos/register-airport.dto";

@Injectable()
export class AirportService {
  constructor(private readonly registerAirportUseCase: RegisterAirportUseCase){}

  async registerAirport(dto: RegisterAirportDto){
    await this.registerAirportUseCase.execute(dto);
  }
}