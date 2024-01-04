import { OmitType } from "@nestjs/swagger";
import { BaseFlightDto } from "./base-flight.dto";

export class CreateFlightDto extends OmitType(BaseFlightDto, ['flightId'] as const){
}
