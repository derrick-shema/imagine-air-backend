import { Injectable } from "@nestjs/common";
import { CreateStaffUsecase } from "src/application/user/staff/create-staff.usecase";
import { CreateStaffDto } from "./dtos/create-staff.dto";

@Injectable()
export class StaffService {
  constructor(private readonly createStaffUseCase: CreateStaffUsecase){}
  create(dto: CreateStaffDto){
    return this.createStaffUseCase.execute(dto);
  }
}