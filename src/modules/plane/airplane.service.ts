import { Injectable } from '@nestjs/common';
import { RegisterPlaneUseCase } from 'src/application/plane/register-plane.usecase';
import { RegisterPlaneDto } from './dtos/register-plane.dto';
import Airplane from 'src/domain/airplane/aggregates/airplane';

@Injectable()
export class AirplaneService {
  constructor(
    private readonly registerPlaneUseCase: RegisterPlaneUseCase,
  ) {}

  registerAirplane(dto: RegisterPlaneDto){
    return this.registerPlaneUseCase.execute(dto);
  }
}