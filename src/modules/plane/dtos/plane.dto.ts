import CabinSection from "src/domain/airplane/aggregates/cabin-section";
import { CabinSectionDto } from "./cabin-section.dto";

export class PlaneDto {
  id: string;
  tailNumber: string;
  planeIATACode: string;
  maxCapacity: number;
  cabinSections: CabinSectionDto[]

}