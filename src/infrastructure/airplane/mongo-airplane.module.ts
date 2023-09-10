import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MongoAirplaneRepository } from "./mongo-airplane.repository";
import { AirplaneSchema } from "./airplane-schema";
import { RegisterPlaneUseCase } from "src/application/plane/register-plane.usecase";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'AirPlane', schema: AirplaneSchema }])],
  //providers: [RegisterPlaneUseCase, MongoAirplaneRepository],
  exports: [MongooseModule.forFeature([{ name: 'AirPlane', schema: AirplaneSchema }])]
  //exports: [RegisterPlaneUseCase, MongoAirplaneRepository]
})
export class MongoAirPlaneModule {}