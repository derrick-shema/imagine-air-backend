import { ApiProperty } from "@nestjs/swagger";
import { BaseCrewMemberDto } from "./base-crew.dto";
import { BasePassengerDto } from "./base-passenger.dto";

export class BaseFlightDto {
  @ApiProperty()
  flightId: string;

  @ApiProperty()
  flightName: string;

  @ApiProperty()
  planeId: string;

  @ApiProperty()
  departureAirportId: string;

  @ApiProperty()
  arrivalAirportId: string;

  @ApiProperty()
  departureTime: Date;

  @ApiProperty()
  arrivalTime: Date;

  //@ApiProperty()
  crew: BaseCrewMemberDto[];

  //@ApiProperty()
  passengers: BasePassengerDto[];
}