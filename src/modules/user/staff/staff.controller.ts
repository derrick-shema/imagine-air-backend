import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { StaffService } from "./staff.service";
import { CreateStaffDto } from "./dtos/create-staff.dto";

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService){}

  @Post('create')
  create(@Body() requestDto: CreateStaffDto){
    return this.staffService.createStaffMember(requestDto);
  }

  @Get()
  findAll() {
    return this.staffService.findAllStaff();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffService.findOneStaffMemberbyID(id);
  }
}