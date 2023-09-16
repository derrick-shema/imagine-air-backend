import { Module } from "@nestjs/common";
import { MongoAirplaneRepository } from "src/infrastructure/airplane/mongo-airplane.repository";
import { RegisterPlaneUseCase } from "src/application/plane/register-plane.usecase";
import { AirplaneService } from "./airplane.service";
import { AirPlaneController } from "./airplane.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { AirplaneModel, AirplaneSchema } from "src/infrastructure/airplane/airplane-schema";

@Module({
  imports:[MongooseModule.forFeature([{name: AirplaneModel.name, schema: AirplaneSchema}])],
  controllers: [AirPlaneController],
  providers: [AirplaneService, RegisterPlaneUseCase, MongoAirplaneRepository],
  exports: [AirplaneService]
})
export class AirplaneModule {}