import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { CreateFlightUseCase } from 'src/application/flight/create-flight.usecase';
import Flight from 'src/domain/flight/aggregates/flight';
import { GetAllFlightsUseCase } from 'src/application/flight/get-all-flights.usecase';
import { GetOneFlightsUseCase } from 'src/application/flight/get-a-flight.usecase';

@Injectable()
export class FlightService {
  constructor(
    private readonly createFlightUseCase: CreateFlightUseCase,
    private readonly getAllFlightsUseCase: GetAllFlightsUseCase,
    private readonly getOneFlightUseCase: GetOneFlightsUseCase){}
  create(dto: CreateFlightDto){
    return this.createFlightUseCase.execute(dto);
  }

  findAll() {
    return this.getAllFlightsUseCase.execute();
  }

  findOne(id: string) {
    return this.getOneFlightUseCase.execute(id);
  }

  update(id: number, updateFlightDto: UpdateFlightDto) {
    return `This action updates a #${id} flight`;
  }

  remove(id: number) {
    return `This action removes a #${id} flight`;
  }
}
