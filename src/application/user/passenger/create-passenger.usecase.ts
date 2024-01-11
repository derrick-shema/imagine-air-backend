import { Injectable } from "@nestjs/common";
import Passenger from "src/domain/user/entities/passenger";
import Email from "src/domain/user/value-objects/user-email";
import UserId from "src/domain/user/value-objects/user-id";
import HashedPassword from "src/domain/user/value-objects/user-password";
import { MongoPassengerRepository } from "src/infrastructure/user/mongo-passenger.repository";
import { CreatePassengerDto } from "src/modules/user/passenger/dtos/create-passenger.dto";

@Injectable()
export class CreatePassengerUseCase {
  constructor(private readonly mongoPassengerRepository: MongoPassengerRepository){}

  async execute(dto: CreatePassengerDto): Promise<Passenger> {
    const passenger = Passenger.create(
      UserId.CreateUnique(),
      dto.firstName,
      dto.lastName,
      Email.create('Passenger Email', dto.email),
      await HashedPassword.create('Hashed Password', dto.password),
      dto.bookingId
    );
    await this.mongoPassengerRepository.save(passenger);
    return passenger;
  }
}