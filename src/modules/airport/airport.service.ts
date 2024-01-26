import { Injectable } from "@nestjs/common";
import { RegisterAirportUseCase } from "src/application/airport/register-airport.usecase";
import { RegisterAirportDto } from "./dtos/register-airport.dto";
import { GetAllAirportsUseCase } from "src/application/airport/get-all-airports.usecase";
import { GetOneAirportUseCase } from "src/application/airport/get-one-airport.usecase";

@Injectable()
export class AirportService {
  constructor(
    private readonly registerAirportUseCase: RegisterAirportUseCase,
    private readonly getAllAirports: GetAllAirportsUseCase,
    private readonly getOneAirport: GetOneAirportUseCase){}

  registerAirport(dto: RegisterAirportDto){
    return this.registerAirportUseCase.execute(dto);
  }

  findAllAirports() {
    return this.getAllAirports.execute()
  }

  findOneAirport(id: string) {
    return this.getOneAirport.execute(id);
  }
}