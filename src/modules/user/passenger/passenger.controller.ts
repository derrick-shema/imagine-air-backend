import { Body, Controller, Post } from "@nestjs/common";
import { PassengerService } from "./passenger.service";
import { CreatePassengerDto } from "./dtos/create-passenger.dto";
import Passenger from "src/domain/flight/entities/Passenger";

@Controller('passengers')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService){}

  @Post('create')
  async createPassenger(@Body() requestDto: CreatePassengerDto){
    return await this.passengerService.create(requestDto)
  }
}