import { Body, Controller, Post } from "@nestjs/common";
import { StaffService } from "./staff.service";
import { CreateStaffDto } from "./dtos/create-staff.dto";

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService){}

  @Post('create')
  createStaff(@Body() requestDto: CreateStaffDto){
    return this.staffService.create(requestDto);
  }
}