import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Passenger, PassengerSchema } from "src/infrastructure/user/passenger.schema";
import { PassengerController } from "./passenger.controller";
import { PassengerService } from "./passenger.service";
import { CreatePassengerUseCase } from "src/application/user/passenger/create-passenger.usecase";
import { MongoPassengerRepository } from "src/infrastructure/user/mongo-passenger.repository";
import { GetAllPassengersUseCase } from "src/application/user/passenger/get-all-passengers.usecase";
import { GetOnePassengerUseCase } from "src/application/user/passenger/get-one-passenger.usecase";

@Module({
  imports:[MongooseModule.forFeature([{name: Passenger.name, schema: PassengerSchema}])],
  controllers: [PassengerController],
  providers: [PassengerService, 
    CreatePassengerUseCase,
    GetAllPassengersUseCase,
    GetOnePassengerUseCase, 
    MongoPassengerRepository],
  exports: [PassengerService]
})

export class PassengerModule{}