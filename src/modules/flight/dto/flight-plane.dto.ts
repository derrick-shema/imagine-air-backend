import { BasePlaneDto } from "src/modules/plane/dtos/base-plane.dto";
import { CabinSectionDto } from "src/modules/plane/dtos/cabin-section.dto";
import { FlightCabinSectionDto } from "./flight-cabin-section.dto";

export class FlightPlaneDto extends BasePlaneDto {
  planeId: string;
  cabinSections: FlightCabinSectionDto[];
}