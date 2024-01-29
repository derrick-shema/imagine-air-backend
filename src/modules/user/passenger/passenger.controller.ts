import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PassengerService } from "./passenger.service";
import { CreatePassengerDto } from "./dtos/create-passenger.dto";

@Controller('passengers')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService){}

  @Post('create')
  create(@Body() requestDto: CreatePassengerDto){
    return this.passengerService.createPassenger(requestDto)
  }

  @Get()
  findAll() {
    return this.passengerService.findAllPassengers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passengerService.findOnePassengerbyID(id);
  }
}