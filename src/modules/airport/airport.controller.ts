import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AirportService } from "./airport.service";
import { RegisterAirportDto } from "./dtos/register-airport.dto";

@Controller('airports')
export class AirportController{
  constructor(private readonly airportService: AirportService){};

  @Post('register')
  create(@Body() registerAirportDto: RegisterAirportDto){
    return this.airportService.registerAirport(registerAirportDto);
  }

  @Get()
  findAll(){
    return this.airportService.findAllAirports();
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return this.airportService.findOneAirport(id);
  }
}