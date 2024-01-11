import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import Passenger from "src/domain/user/entities/Passenger";
import PassengerRepository from "src/domain/user/repositories/passenger.repository";
import { Passenger as MongoPassenger } from "./passenger.schema";
import { Model } from "mongoose";

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
}