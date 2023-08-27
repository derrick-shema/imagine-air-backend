import { SeatDto } from "./seat.dto";

export class CabinSectionDto {
  sectionName: string;
  rows: number;
  arrangement: number[];
  seats: SeatDto[];
}