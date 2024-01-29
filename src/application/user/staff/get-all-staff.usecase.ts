import { Injectable } from "@nestjs/common";
import { MongoStaffRepository } from "src/infrastructure/user/mongo-staff.repository";

@Injectable()
export class GetAllStaffUsecase {
  constructor(private readonly staffRepository: MongoStaffRepository){}

  async execute(){
    return await this.staffRepository.findAll();
  }
}