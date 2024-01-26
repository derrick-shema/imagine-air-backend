import { Injectable } from '@nestjs/common';
import { RegisterPlaneUseCase } from 'src/application/plane/register-plane.usecase';
import { RegisterPlaneDto } from './dtos/register-plane.dto';
import Airplane from 'src/domain/airplane/aggregates/airplane';
import { GetAllPlanesUsecase } from 'src/application/plane/get-all-planes.usecase';
import { GetOnePlaneUsecase } from 'src/application/plane/get-one-plane.usecase';

@Injectable()
export class AirplaneService {
  constructor(
    private readonly registerPlaneUseCase: RegisterPlaneUseCase,
    private readonly getAllPlanes: GetAllPlanesUsecase,
    private readonly getOnePlane: GetOnePlaneUsecase) {}

  registerAirplane(dto: RegisterPlaneDto){
    return this.registerPlaneUseCase.execute(dto);
  }

  findAllPlanes() {
    return this.getAllPlanes.execute();
  }

  findOnePlane(id: string) {
    return this.getOnePlane.execute(id);
  }
}