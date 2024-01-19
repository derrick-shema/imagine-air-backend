import { Body, Controller, Post } from "@nestjs/common";
import { AirportService } from "./airport.service";
import { RegisterAirportDto } from "./dtos/register-airport.dto";

@Controller('airports')
export class AirportController{
  constructor(private readonly airportService: AirportService){};

  @Post('register')
  async create(@Body() registerAirportDto: RegisterAirportDto){
    await this.airportService.registerAirport(registerAirportDto);
  }
}