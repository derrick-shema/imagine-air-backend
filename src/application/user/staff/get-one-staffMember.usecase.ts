import { Injectable } from "@nestjs/common";
import { MongoStaffRepository } from "src/infrastructure/user/mongo-staff.repository";

@Injectable()
export class GetOneStaffMemberUsecase {
  constructor(private readonly staffRepository: MongoStaffRepository){}

  async execute(id: string) {
    return await this.staffRepository.findOnebyID(id);
  }
}