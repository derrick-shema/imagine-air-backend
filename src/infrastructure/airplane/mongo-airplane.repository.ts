import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import Airplane from "src/domain/airplane/aggregates/airplane";
import AirplaneRepository from "src/domain/airplane/repositories/airplane.repository";
import { Plane } from "./airplane-schema";
import PlaneId from "src/domain/airplane/value-objects/plane-id";
import TailNumber from "src/domain/airplane/value-objects/tail-number";
import PlaneIATACode from "src/domain/airplane/value-objects/plane-IATA-code";
import Capacity from "src/domain/airplane/value-objects/capacity";
import CabinSection from "src/domain/airplane/aggregates/cabin-section";
import CabinSectionId from "src/domain/airplane/value-objects/cabin-section-id";
import Seat from "src/domain/airplane/entities/seat";
import SeatId from "src/domain/airplane/value-objects/seat-id";
import SeatDesignation from "src/domain/airplane/value-objects/seat-designation";

@Injectable()
export class MongoAirplaneRepository implements AirplaneRepository {
  constructor(@InjectModel(Plane.name) private readonly airplaneModel: Model<Plane>) {}
  
  async save(airplane: Airplane){
    const planeId = airplane.Id.getValue();
    const tailNumber = airplane.getTailNumber();
    const planeIATACode = airplane.getPlaneIATACode();
    const maxCapacity = airplane.getMaxCapacity();
    const cabinSections = airplane.getCabinSections().map((section) => ({
      cabinSectionId: section.Id.getValue(),
      sectionName: section.getSectionName(),
      rows: section.getRows(),
      arrangement: section.getArrangement(),
      seats: section.getSeats().map((seat) => ({
        seatId: seat.Id.getValue(),
        seatDesignation: seat.getSeatDesignation(),
        seatStatus: seat.getSeatStatus()
      })),
    }));

    const airPlaneData = {
      planeId,
      tailNumber,
      planeIATACode,
      maxCapacity,
      cabinSections
    }
    const newAirplane = new this.airplaneModel(airPlaneData);
    await newAirplane.save();
  }

  async findAll(): Promise<Airplane[]> {
    const planes = await this.airplaneModel.find().exec();
    return planes.map(plane => this.mapToDomain(plane))
  }

  async findOnebyId(id: string): Promise<Airplane>{
    const plane = await this.airplaneModel.findById(id).exec();
    if(!plane){
      throw new NotFoundException(`Plane with ID ${id} not found`)
    }
    return this.mapToDomain(plane);
  }

  private mapToDomain(airplaneModel: Plane): Airplane {
    return Airplane.create(
      PlaneId.create('airplaneID', airplaneModel.planeId),
      TailNumber.create('tail number', airplaneModel.tailNumber),
      PlaneIATACode.create('plane IATA', airplaneModel.planeIATACode),
      Capacity.create('plane capacity', Number(airplaneModel.maxCapacity)),
      airplaneModel.cabinSections.map(cabinsection => CabinSection.create(
        CabinSectionId.create('cabinSectionID', cabinsection.cabinSectionId),
        cabinsection.cabinSectionName,
        cabinsection.rows,
        cabinsection.arrangement,
        cabinsection.seats.map(s => Seat.create(
          SeatId.create('seatID', s.seatId),
          SeatDesignation.create('seatDesignation', s.seatDesignation),
          s.seatStatus
        ))
      ))
    )
  }
}