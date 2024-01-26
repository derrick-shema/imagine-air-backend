import { InjectModel } from "@nestjs/mongoose";
import Airport from "src/domain/airport/entities/airport";
import AirportRepository from "src/domain/airport/repositories/airport.repository";
import { Airport as MongoAirport } from "./airport-schema";
import { Model } from "mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";
import AirportId from "src/domain/airport/value-objects/airport-id";
import AirportName from "src/domain/airport/value-objects/airport-name";
import IATA from "src/domain/airport/value-objects/IATA-code";
import CityName from "src/domain/airport/value-objects/city-name";
import CityCode from "src/domain/airport/value-objects/city-code";

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

  async findAll(): Promise<Airport[]> {
    const airports = await this.airportModel.find().exec();
    return airports.map(airport => this.mapToDomain(airport));
  }

  async findOneById(id: string): Promise<Airport> {
    const airport = await this.airportModel.findById(id).exec();
    if (!airport) {
      throw new NotFoundException(`Flight with ID ${id} not found`);
    }
    return this.mapToDomain(airport);
  }

  private mapToDomain(airportModel: MongoAirport): Airport {
    return new Airport(
      AirportId.create('AirportId',airportModel.airportId),
      AirportName.create('AirportName',airportModel.airportName),
      IATA.create('planeId',airportModel.airportIATA),
      CityName.create('CityName', airportModel.city),
      CityCode.create('CityCode', airportModel.city_code)
    );
  }
}