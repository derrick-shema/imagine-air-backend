import { Injectable } from "@nestjs/common";
import { MongoPassengerRepository } from "src/infrastructure/user/mongo-passenger.repository";

@Injectable()
export class GetAllPassengersUseCase {
  constructor(private readonly passengerRepository: MongoPassengerRepository){}

  async execute() {
    return await this.passengerRepository.findAllPassengers();
  }
}