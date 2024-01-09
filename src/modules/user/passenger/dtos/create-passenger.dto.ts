import { ApiProperty, OmitType } from "@nestjs/swagger";
import { BaseUserDto } from "../../base-user.dto";

export class CreatePassengerDto extends OmitType(BaseUserDto, ['userId'] as const) {
  @ApiProperty()
  bookingId: string;
}