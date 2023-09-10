import { Injectable } from '@nestjs/common';
import { RegisterPlaneUseCase } from 'src/application/plane/register-plane.usecase';
import { RegisterPlaneDto } from './dtos/register-plane.dto';

@Injectable()
export class AirplaneService {
  constructor(
    private readonly registerPlaneUseCase: RegisterPlaneUseCase,
  ) {}

  async registerAirplane(dto: RegisterPlaneDto): Promise<void> {
    // Delegate registration to the use case
    await this.registerPlaneUseCase.execute(dto);
  }
}