import { Module } from "@nestjs/common";
import { AirPlaneController } from "./airplane.controller";
import { AirplaneService } from "./airplane.service";
import { MongoAirPlaneModule } from "src/infrastructure/airplane/mongo-airplane.module";
import { RegisterPlaneUseCase } from "src/application/plane/register-plane.usecase";
import { MongoAirplaneRepository } from "src/infrastructure/airplane/mongo-airplane.repository";

@Module({
  imports:[MongoAirPlaneModule],
  controllers: [AirPlaneController],
  providers: [AirplaneService, RegisterPlaneUseCase, MongoAirplaneRepository],
  exports: [AirplaneService]
})
export class AirplaneModule {}