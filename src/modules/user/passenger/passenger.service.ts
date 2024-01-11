import { Injectable } from "@nestjs/common";
import { CreatePassengerUseCase } from "src/application/user/passenger/create-passenger.usecase";
import { CreatePassengerDto } from "./dtos/create-passenger.dto";
import Passenger from "src/domain/user/entities/passenger";

@Injectable()
export class PassengerService {
  constructor(private readonly createPassengerUseCase: CreatePassengerUseCase){}

  async create(dto: CreatePassengerDto): Promise<Passenger> {
    return await this.createPassengerUseCase.execute(dto)
  }
}