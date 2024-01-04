import { ApiProperty } from "@nestjs/swagger";

export class BaseCrewMemberDto {
  @ApiProperty()
  crewMemberId: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  role: string;
}