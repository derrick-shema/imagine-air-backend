import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { RegisterPlaneUseCase } from 'src/application/plane/register-plane.usecase';
import { RegisterPlaneDto } from './dtos/register-plane.dto';
import { AirplaneService } from './airplane.service';
import Airplane from 'src/domain/airplane/aggregates/airplane';

@Controller('planes')
export class AirPlaneController{
  constructor(private readonly airplaneService: AirplaneService) {}

  @Post('register')
  create(@Body() requestDto: RegisterPlaneDto){
    return this.airplaneService.registerAirplane(requestDto);
  }

  @Get()
  findAll() {
    return this.airplaneService.findAllPlanes();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.airplaneService.findOnePlane(id);
  }
}