import { MongoStaffRepository } from "src/infrastructure/user/mongo-staff.repository";

export class GetOneStaffMemberUsecase {
  constructor(private readonly staffRepository: MongoStaffRepository){}

  async execute(id: string) {
    return await this.staffRepository.findOnebyID(id);
  }
}