import { Body, Controller, Post } from "@nestjs/common";
import { StaffService } from "./staff.service";
import { CreateStaffDto } from "./dtos/create-staff.dto";

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService){}

  @Post('create')
  async createStaff(@Body() requestDto: CreateStaffDto){
    return await this.staffService.create(requestDto);
  }
}