import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import Airplane from "src/domain/airplane/aggregates/airplane";
import AirplaneRepository from "src/domain/airplane/repositories/airplane.repository";
import { AirplaneModel, AirplaneDocument } from "./airplane-schema";

@Injectable()
export class MongoAirplaneRepository implements AirplaneRepository {
  constructor(@InjectModel(AirplaneModel.name) private readonly airplaneModel: Model<AirplaneDocument>) {}
  
  async save(airplane: Airplane): Promise<void>{
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
    console.log(airPlaneData);
    const newAirplane = new this.airplaneModel(airPlaneData);
    console.log(newAirplane);
    await newAirplane.save();
    //return newAirplane.toObject() as Airplane;
  }
}