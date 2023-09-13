import { CabinSectionDto } from "./cabin-section.dto";

export class RegisterPlaneDto {
  tailNumber: string;
  planeIATACode: string;
  maxCapacity: number;
  cabinSections: CabinSectionDto[];
}