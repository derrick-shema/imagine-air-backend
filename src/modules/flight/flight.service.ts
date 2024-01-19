import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { CreateFlightUseCase } from 'src/application/flight/create-flight.usecase';
import Flight from 'src/domain/flight/aggregates/flight';

@Injectable()
export class FlightService {
  constructor(private readonly createFlightUseCase: CreateFlightUseCase){}
  create(dto: CreateFlightDto){
    return this.createFlightUseCase.execute(dto);
  }

  findAll() {
    return `This action returns all flight`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flight`;
  }

  update(id: number, updateFlightDto: UpdateFlightDto) {
    return `This action updates a #${id} flight`;
  }

  remove(id: number) {
    return `This action removes a #${id} flight`;
  }
}
