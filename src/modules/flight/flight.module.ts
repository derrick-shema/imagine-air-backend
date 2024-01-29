import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { Flight, FlightSchema } from 'src/infrastructure/flight/flight-schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateFlightUseCase } from 'src/application/flight/create-flight.usecase';
import { MongoFlightRepository } from 'src/infrastructure/flight/mongo-flight.repository';
import { GetAllFlightsUseCase } from 'src/application/flight/get-all-flights.usecase';
import { GetOneFlightsUseCase } from 'src/application/flight/get-a-flight.usecase';

@Module({
  imports: [MongooseModule.forFeature([{name: Flight.name, schema: FlightSchema}])],
  controllers: [FlightController],
  providers: [FlightService, CreateFlightUseCase, MongoFlightRepository, GetAllFlightsUseCase, GetOneFlightsUseCase],
  exports: [FlightService]
})
export class FlightModule {}
