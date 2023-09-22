import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AirplaneSchema } from "./airplane/airplane-schema";
import { MongoAirplaneRepository } from "./airplane/mongo-airplane.repository";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Airplane', schema: AirplaneSchema }])],
  providers: [MongoAirplaneRepository],
  exports: [MongoAirplaneRepository]
})
export class InfrastructureModule {}