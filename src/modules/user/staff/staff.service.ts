import { Injectable } from "@nestjs/common";
import { CreateStaffUsecase } from "src/application/user/staff/create-staff.usecase";
import { CreateStaffDto } from "./dtos/create-staff.dto";
import { GetAllStaffUsecase } from "src/application/user/staff/get-all-staff.usecase";
import { GetOneStaffMemberUsecase } from "src/application/user/staff/get-one-staffMember.usecase";

@Injectable()
export class StaffService {
  constructor(
    private readonly createStaffUseCase: CreateStaffUsecase,
    private readonly getAllStaff: GetAllStaffUsecase,
    private readonly getOneStaffMember: GetOneStaffMemberUsecase){}

  createStaffMember(dto: CreateStaffDto){
    return this.createStaffUseCase.execute(dto);
  }

  findAllStaff() {
    return this.getAllStaff.execute();
  }

  findOneStaffMemberbyID(id: string) {
    return this.getOneStaffMember.execute(id);
  }
}