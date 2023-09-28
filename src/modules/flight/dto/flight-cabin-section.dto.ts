import { CabinSectionDto } from "src/modules/plane/dtos/cabin-section.dto";
import { FlightSeatDto } from "./flight-seat.dto";

export class FlightCabinSectionDto extends CabinSectionDto {
  cabinSectionId: string;
  seats: FlightSeatDto[];
}