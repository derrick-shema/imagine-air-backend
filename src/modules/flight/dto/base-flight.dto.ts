import { ApiProperty } from "@nestjs/swagger";
import { BaseAirportDto } from "./base-airport.dto";
import { BaseCrewMemberDto } from "./base-crew.dto";
import { BasePlaneDto } from "src/modules/plane/dtos/base-plane.dto";
import { BasePassengerDto } from "./base-passenger.dto";

export class BaseFlightDto {
  @ApiProperty()
  flightId: string;

  @ApiProperty()
  flightName: string;

  @ApiProperty()
  plane: BasePlaneDto;

  @ApiProperty()
  departureAirport: BaseAirportDto;

  @ApiProperty()
  arrivalAirport: BaseAirportDto;

  @ApiProperty()
  departureTime: Date;

  @ApiProperty()
  arrivalTime: Date;

  @ApiProperty()
  crew: BaseCrewMemberDto[];

  @ApiProperty()
  passengers: BasePassengerDto[];
}