import { Module } from "@nestjs/common";
import { MongooseModule, Schema } from "@nestjs/mongoose";
import { StaffMember, StaffSchema } from "src/infrastructure/user/staff.schema";
import { StaffController } from "./staff.controller";
import { StaffService } from "./staff.service";
import { CreateStaffUsecase } from "src/application/user/staff/create-staff.usecase";
import { MongoStaffRepository } from "src/infrastructure/user/mongo-staff.repository";
import { GetAllStaffUsecase } from "src/application/user/staff/get-all-staff.usecase";
import { GetOneStaffMemberUsecase } from "src/application/user/staff/get-one-staffMember.usecase";

@Module({
  imports:[MongooseModule.forFeature([{name: StaffMember.name, schema: StaffSchema}])],
  controllers:[StaffController],
  providers:[StaffService,
    CreateStaffUsecase,
    GetAllStaffUsecase,
    GetOneStaffMemberUsecase, 
    MongoStaffRepository],
  exports:[StaffService]
})
export class StaffModule{}