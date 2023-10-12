import { ApiProperty } from "@nestjs/swagger";

export class BaseSeatDto {
  @ApiProperty()
  seatId: string;

  @ApiProperty()
  seatDesignation: string;

  @ApiProperty()
  status: string;
}