import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import Passenger from "src/domain/user/entities/Passenger";
import PassengerRepository from "src/domain/user/repositories/passenger.repository";
import { Passenger as MongoPassenger } from "./passenger.schema";
import { Model } from "mongoose";
import Email from "src/domain/user/value-objects/user-email";
import UserId from "src/domain/user/value-objects/user-id";

@Injectable()
export class MongoPassengerRepository implements PassengerRepository{
  constructor(@InjectModel(MongoPassenger.name) private readonly passengerModel: Model<MongoPassenger>){}
  async save(passenger: Passenger) {
    const passengerId = passenger.Id.Value; 
    const firstName = passenger.getFirstName();
    const lastName = passenger.getLastName();
    const email = passenger.getEmail();
    const hashedAndSaltedPassword = passenger.getHashedAndSaltedPassword();
    const bookingId = passenger.getBookingId();

    const passengerData = {
      passengerId,
      firstName,
      lastName,
      email,
      hashedAndSaltedPassword,
      bookingId
    }

    const newPassenger = new this.passengerModel(passengerData);
    await newPassenger.save();
  }

  async findAllPassengers(): Promise<Passenger[]> {
    const passengers = await this.passengerModel.find().exec();
    return passengers.map(passenger => this.mapToModel(passenger));
  }

  async findOnePassengerbyID(id: string): Promise<Passenger> {
    const passenger = await this.passengerModel.findById(id).exec();
    if(!passenger){
      throw new NotFoundException(`Passenger with ID ${id} not found`)
    }

    return this.mapToModel(passenger);
  }

  private mapToModel(passengerModel: MongoPassenger): Passenger {
    return Passenger.create(
      UserId.Create('passenger id', passengerModel.passengerId),
      passengerModel.firstName,
      passengerModel.lastName,
      Email.create('passenger email', passengerModel.email),
      passengerModel.hashedAndSaltedPassword,
      passengerModel.bookingId
    )
  }
}