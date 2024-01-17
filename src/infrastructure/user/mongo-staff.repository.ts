import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import Staff from "src/domain/user/entities/staff";
import StaffRepository from "src/domain/user/repositories/staff.repository";
import { Staff as MongoStaff } from "./staff.schema";
import { Model } from "mongoose";

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
}