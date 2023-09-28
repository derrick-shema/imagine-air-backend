import { FlightCrewMemberDto } from "./flight-crew.dto";
import { FlightPlaneDto } from "./flight-plane.dto";

export class BaseFlightDto {
  flightName: string;
  plane: FlightPlaneDto;
  departureAirport: AirportDto;
  arrivalAirport: AirportDto;
  departureTime: Date;
  arrivalTime: Date;
  crew: FlightCrewMemberDto[];
  passengers: PassengerDto[];
}