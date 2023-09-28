import { CabinSectionDto } from "./cabin-section.dto";

export class BasePlaneDto {
  tailNumber: string;
  planeIATACode: string;
  maxCapacity: number;
  cabinSections: CabinSectionDto[];
}