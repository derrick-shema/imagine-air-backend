import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { FlightModel, FlightSchema } from 'src/infrastructure/flight/flight-schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateFlightUseCase } from 'src/application/flight/create-flight.usecase';
import { MongoFlightRepository } from 'src/infrastructure/flight/mongo-flight.repository';

@Module({
  imports: [MongooseModule.forFeature([{name: FlightModel.name, schema: FlightSchema}])],
  controllers: [FlightController],
  providers: [FlightService, CreateFlightUseCase, MongoFlightRepository],
})
export class FlightModule {}
