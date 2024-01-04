import { OmitType } from "@nestjs/swagger";
import { BaseSeatDto } from "./base-seat.dto";

export class CreateSeatDto extends OmitType(BaseSeatDto, ['seatId'] as const) {}
