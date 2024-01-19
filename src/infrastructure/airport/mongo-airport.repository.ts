import { InjectModel } from "@nestjs/mongoose";
import Airport from "src/domain/airport/entities/airport";
import AirportRepository from "src/domain/airport/repositories/airport.repository";
import { Airport as MongoAirport } from "./airport-schema";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MongoAirportRepository implements AirportRepository{
  constructor(@InjectModel(MongoAirport.name) private readonly airportModel: Model<MongoAirport>){}

  async save(airport: Airport) {
    const airportId = airport.Id.getValue();
    const airportName = airport.getAirportName();
    const airportIATA = airport.getAirportIATA();
    const city = airport.getCity();
    const city_code = airport.getCityCode();

    const airportData = {airportId, airportName, airportIATA, city, city_code};
    const newAirport =new this.airportModel(airportData);
    await newAirport.save();
  }
}