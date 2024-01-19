import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Airport, AirportSchema } from "src/infrastructure/airport/airport-schema";
import { AirportController } from "./airport.controller";
import { AirportService } from "./airport.service";
import { RegisterAirportUseCase } from "src/application/airport/register-airport.usecase";
import { MongoAirportRepository } from "src/infrastructure/airport/mongo-airport.repository";

@Module({
  imports:[MongooseModule.forFeature([{name: Airport.name, schema: AirportSchema}])],
  controllers:[AirportController],
  providers:[AirportService,RegisterAirportUseCase,MongoAirportRepository],
  exports:[AirportService]
})
export class AirportModule {}