import { OmitType } from "@nestjs/swagger";
import { BaseCabinSectionDto } from "./base-cabin-section.dto";
import { CreateSeatDto } from "./create-seat.dto";

export class CreateCabinSectionDto extends OmitType(BaseCabinSectionDto, ['cabinSectionId','seats'] as const) {
  seats: CreateSeatDto[];
}