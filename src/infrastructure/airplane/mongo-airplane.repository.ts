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
    const {getTailNumber, getPlaneIATACode, getMaxCapacity, getCabinSections} = airplane;
    const airPlaneData = {
      planeId,
      getTailNumber,
      getPlaneIATACode,
      getMaxCapacity,
      getCabinSections
    }
    const newAirplane = new this.airplaneModel(airPlaneData);
    await newAirplane.save();
    //return newAirplane.toObject() as Airplane;
  }
}