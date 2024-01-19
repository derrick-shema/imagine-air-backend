import { Body, Controller, Post } from "@nestjs/common";
import { PassengerService } from "./passenger.service";
import { CreatePassengerDto } from "./dtos/create-passenger.dto";
import Passenger from "src/domain/user/entities/passenger";

@Controller('passengers')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService){}

  @Post('create')
  createPassenger(@Body() requestDto: CreatePassengerDto){
    return this.passengerService.create(requestDto)
  }
}