import { Injectable } from "@nestjs/common";
import { MongoPassengerRepository } from "src/infrastructure/user/mongo-passenger.repository";

@Injectable()
export class GetOnePassengerUseCase {
  constructor(private readonly passengerRepository: MongoPassengerRepository){}

  async execute(id: string) {
    return await this.passengerRepository.findOnePassengerbyID(id);
  }
}