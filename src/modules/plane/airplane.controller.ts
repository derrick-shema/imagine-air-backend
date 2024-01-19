import { Controller, Post, Body } from '@nestjs/common';
import { RegisterPlaneUseCase } from 'src/application/plane/register-plane.usecase';
import { RegisterPlaneDto } from './dtos/register-plane.dto';
import { AirplaneService } from './airplane.service';
import Airplane from 'src/domain/airplane/aggregates/airplane';

@Controller('planes')
export class AirPlaneController{
  constructor(private readonly airplaneService: AirplaneService) {}

  @Post('register')
  registerPlane(@Body() requestDto: RegisterPlaneDto){
    return this.airplaneService.registerAirplane(requestDto);
  }
}