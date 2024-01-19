import { OmitType } from "@nestjs/swagger";
import { BaseAirportDto } from "./base-airport.dto";

export class RegisterAirportDto extends OmitType(BaseAirportDto, ['airportId'] as const){
}
