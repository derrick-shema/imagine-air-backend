import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import Airplane from "src/domain/airplane/aggregates/airplane";
import AirplaneRepository from "src/domain/airplane/repositories/airplane.repository";
import { Plane, AirplaneDocument } from "./airplane-schema";

@Injectable()
export class MongoAirplaneRepository implements AirplaneRepository {
  constructor(@InjectModel(Plane.name) private readonly airplaneModel: Model<AirplaneDocument>) {}
  //constructor (){}
  
  async save(airplane: Airplane): Promise<void>{
    const planeId = airplane.Id.getValue();
    const tailNumber = airplane.getTailNumber();
    const planeIATACode = airplane.getPlaneIATACode();
    const maxCapacity = airplane.getMaxCapacity();
    const cabinSections = airplane.getCabinSections();
    //const {getTailNumber, getPlaneIATACode, getMaxCapacity, getCabinSections} = airplane;
    const airPlaneData = {
      planeId,
      tailNumber,
      planeIATACode,
      maxCapacity,
      cabinSections
    }
    const newAirplane = new this.airplaneModel(airPlaneData);
    await newAirplane.save();
    console.log(airPlaneData);
    //return newAirplane.toObject() as Airplane;
  }
}