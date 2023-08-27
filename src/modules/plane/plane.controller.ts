import { Controller, Post, Body } from '@nestjs/common';
import { RegisterPlaneUseCase } from 'src/application/plane/register-plane.usecase';
import { RegisterPlaneDto } from './dtos/register-plane.dto';

@Controller('planes')
export class PlaneController{
  constructor(private readonly registerPlaneUseCase: RegisterPlaneUseCase) {}

  @Post('register')
  async registerPlane(@Body() requestDto: RegisterPlaneDto){
    return this.registerPlaneUseCase.execute(requestDto);
  }
}