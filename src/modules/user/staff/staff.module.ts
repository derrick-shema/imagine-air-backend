import { Module } from "@nestjs/common";
import { MongooseModule, Schema } from "@nestjs/mongoose";
import { Staff, StaffSchema } from "src/infrastructure/user/staff.schema";
import { StaffController } from "./staff.controller";
import { StaffService } from "./staff.service";
import { CreateStaffUsecase } from "src/application/user/staff/create-staff.usecase";
import { MongoStaffRepository } from "src/infrastructure/user/mongo-staff.repository";

@Module({
  imports:[MongooseModule.forFeature([{name: Staff.name, schema: StaffSchema}])],
  controllers:[StaffController],
  providers:[StaffService, CreateStaffUsecase, MongoStaffRepository],
  exports:[StaffService]
})
export class StaffModule{}