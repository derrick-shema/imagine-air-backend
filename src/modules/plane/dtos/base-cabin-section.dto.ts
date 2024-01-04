import { ApiProperty } from "@nestjs/swagger";
import { BaseSeatDto } from "./base-seat.dto";

export class BaseCabinSectionDto {
  @ApiProperty()
  cabinSectionId: string;

  @ApiProperty()
  sectionName: string;

  @ApiProperty()
  rows: number;

  @ApiProperty()
  arrangement: number[];

  @ApiProperty()
  seats: BaseSeatDto[];
}