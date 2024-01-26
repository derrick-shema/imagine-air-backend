import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Airport, AirportSchema } from "src/infrastructure/airport/airport-schema";
import { AirportController } from "./airport.controller";
import { AirportService } from "./airport.service";
import { RegisterAirportUseCase } from "src/application/airport/register-airport.usecase";
import { MongoAirportRepository } from "src/infrastructure/airport/mongo-airport.repository";
import { GetAllAirportsUseCase } from "src/application/airport/get-all-airports.usecase";
import { GetOneAirportUseCase } from "src/application/airport/get-one-airport.usecase";

@Module({
  imports:[MongooseModule.forFeature([{name: Airport.name, schema: AirportSchema}])],
  controllers:[AirportController],
  providers:[AirportService,RegisterAirportUseCase,GetAllAirportsUseCase, GetOneAirportUseCase,MongoAirportRepository],
  exports:[AirportService]
})
export class AirportModule {}