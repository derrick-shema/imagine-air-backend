import { Injectable } from "@nestjs/common";
import Airplane from "src/domain/airplane/aggregates/airplane";
import CabinSection from "src/domain/airplane/aggregates/cabin-section";
import Seat from "src/domain/airplane/entities/seat";
import CabinSectionId from "src/domain/airplane/value-objects/cabin-section-id";
import Capacity from "src/domain/airplane/value-objects/capacity";
import PlaneIATACode from "src/domain/airplane/value-objects/plane-IATA-code";
import PlaneId from "src/domain/airplane/value-objects/plane-id";
import SeatDesignation from "src/domain/airplane/value-objects/seat-designation";
import SeatId from "src/domain/airplane/value-objects/seat-id";
import TailNumber from "src/domain/airplane/value-objects/tail-number";
import { MongoAirplaneRepository } from "src/infrastructure/airplane/mongo-airplane.repository";
import { RegisterPlaneDto } from "src/modules/plane/dtos/register-plane.dto";

@Injectable()
export class RegisterPlaneUseCase {
  constructor(private readonly airplaneRepository: MongoAirplaneRepository){}

  async execute(dto: RegisterPlaneDto): Promise<Airplane>{
    // receives properties of a plane from client's dto
    const airplane = Airplane.create(
      PlaneId.createUnique(),
      TailNumber.create('tail number', dto.tailNumber),
      PlaneIATACode.create('plane IATA code', dto.planeIATACode),
      Capacity.create('plane capacity', dto.maxCapacity),
      dto.cabinSections.map(section => CabinSection.create(
        CabinSectionId.createUnique(),
        section.sectionName,
        section.rows,
        section.arrangement,
        section.seats.map(s => Seat.create(
          SeatId.createUnique(),
          SeatDesignation.create('Seat Designation',s.seatDesignation),
          s.status
        ))
      ))
      )
      console.log(dto.cabinSections);
      await this.airplaneRepository.save(airplane);
      return airplane;
  } 
}
