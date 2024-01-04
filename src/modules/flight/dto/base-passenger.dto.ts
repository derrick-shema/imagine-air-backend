import { ApiProperty } from "@nestjs/swagger";

export class BasePassengerDto {
  @ApiProperty()
  passengerId: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  seat: string;
}