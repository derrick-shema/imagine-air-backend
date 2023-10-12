import { OmitType } from "@nestjs/swagger";
import { BasePlaneDto } from "./base-plane.dto";
import { CreateCabinSectionDto } from "./create-cabin-section.dto";

export class RegisterPlaneDto extends OmitType(BasePlaneDto, ['planeId','cabinSections'] as const){
  cabinSections: CreateCabinSectionDto[];
}