import { ApiProperty, OmitType } from "@nestjs/swagger";
import { BaseUserDto } from "../../base-user.dto";

export class CreateStaffDto extends OmitType(BaseUserDto, ['userId'] as const) {
  @ApiProperty()
  role: string;

  @ApiProperty()
  title: string;
}