import { Injectable } from "@nestjs/common";
import Airplane from "src/domain/airplane/aggregates/airplane";
import { MongoAirplaneRepository } from "src/infrastructure/airplane/mongo-airplane.repository";

@Injectable()
export class GetAllPlanesUsecase {
  constructor(private readonly airplaneRepository: MongoAirplaneRepository){}

  async execute(): Promise<Airplane[]>{
    return await this.airplaneRepository.findAll();
  }
}