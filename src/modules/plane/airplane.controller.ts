import { Controller, Post, Body } from '@nestjs/common';
import { RegisterPlaneUseCase } from 'src/application/plane/register-plane.usecase';
import { RegisterPlaneDto } from './dtos/register-plane.dto';
import { AirplaneService } from './airplane.service';

@Controller('planes')
export class AirPlaneController{
  constructor(private readonly airplaneService: AirplaneService) {}

  @Post('register')
  async registerPlane(@Body() requestDto: RegisterPlaneDto){
    return this.airplaneService.registerAirplane(requestDto);
  }
}