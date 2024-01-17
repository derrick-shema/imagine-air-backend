import { Injectable } from "@nestjs/common";
import Staff from "src/domain/user/entities/staff";
import Email from "src/domain/user/value-objects/user-email";
import UserId from "src/domain/user/value-objects/user-id";
import HashedPassword from "src/domain/user/value-objects/user-password";
import { MongoStaffRepository } from "src/infrastructure/user/mongo-staff.repository";
import { CreateStaffDto } from "src/modules/user/staff/dtos/create-staff.dto";

@Injectable()
export class CreateStaffUsecase {
  constructor(private readonly mongoStaffRepository: MongoStaffRepository){}
  async execute(dto: CreateStaffDto): Promise<Staff> {
    const staff = Staff.create (
      UserId.CreateUnique(),
      dto.firstName,
      dto.lastName,
      Email.create('Staff email', dto.email),
      await HashedPassword.create('Staff password', dto.password),
      dto.role,
      dto.title
    )

    await this.mongoStaffRepository.save(staff);
    return staff;
  }
}