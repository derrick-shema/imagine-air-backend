import { Injectable } from "@nestjs/common";
import { CreatePassengerUseCase } from "src/application/user/passenger/create-passenger.usecase";
import { CreatePassengerDto } from "./dtos/create-passenger.dto";
import Passenger from "src/domain/user/entities/passenger";
import { GetAllPassengersUseCase } from "src/application/user/passenger/get-all-passengers.usecase";
import { GetOnePassengerUseCase } from "src/application/user/passenger/get-one-passenger.usecase";

@Injectable()
export class PassengerService {
  constructor(
    private readonly createPassengerUseCase: CreatePassengerUseCase,
    private readonly getAllPassengersUseCase: GetAllPassengersUseCase,
    private readonly getOnePassengerUseCase: GetOnePassengerUseCase){}

  createPassenger(dto: CreatePassengerDto){
    return this.createPassengerUseCase.execute(dto)
  }

  findAllPassengers() {
    return this.getAllPassengersUseCase.execute();
  }

  findOnePassengerbyID(id: string) {
    return this.getOnePassengerUseCase.execute(id);
  }
}