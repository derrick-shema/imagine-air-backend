import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import Staff from "src/domain/user/entities/staff";
import StaffRepository from "src/domain/user/repositories/staff.repository";
import { StaffMember as MongoStaff } from "./staff.schema";
import { Model } from "mongoose";
import UserId from "src/domain/user/value-objects/user-id";
import Email from "src/domain/user/value-objects/user-email";
import HashedPassword from "src/domain/user/value-objects/user-password";

@Injectable()
export class MongoStaffRepository implements StaffRepository{
  constructor(@InjectModel(MongoStaff.name) private readonly staffModel: Model<MongoStaff>){}
  async save(staff: Staff) {
      const staffId = staff.Id.Value;
      const firstName = staff.getFirstName();
      const lastName = staff.getLastName();
      const email = staff.getEmail();
      const hashedAndSaltedPassword = staff.getEmail();
      const role = staff.getRole();
      const title = staff.getTitle();

      const staffData = {
        staffId, firstName, lastName, email, hashedAndSaltedPassword, role, title
      }

      await new this.staffModel(staffData).save();
  }

  async findAll(): Promise<Staff[]>{
    const staff = await this.staffModel.find().exec();
    return staff.map(staff => this.mapToModel(staff));
  }

  async findOnebyID(id: string): Promise <Staff>{
    const staffMember = await this.staffModel.findById(id).exec();
    if (!staffMember) {
      throw new NotFoundException(`Staff member with id ${id} not found`)
    }

    return this.mapToModel(staffMember);
  }

  private mapToModel(staffModel: MongoStaff): Staff {
    return Staff.create(
      UserId.Create('passenger id', staffModel.staffId),
      staffModel.firstName,
      staffModel.lastName,
      Email.create('passenger email', staffModel.email),
      staffModel.hashedAndSaltedPassword,
      staffModel.role,
      staffModel.title
    )
  }
}