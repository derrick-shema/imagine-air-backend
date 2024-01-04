import AggregateRoot from "src/domain/common/models/aggregate-root";
import FlightId from "../value-objects/flight-id";
import FlightName from "../value-objects/flight-name";
import CrewMember from "../entities/Crew";
import Passenger from "../entities/Passenger";
import PlaneId from "src/domain/airplane/value-objects/plane-id";
import AirportId from "src/domain/airport/value-objects/airport-id";

class Flight extends AggregateRoot<FlightId> {
  getFlightName() {
    return this.flightName;
  }

  getFlightPlaneId() {
    return this.planeId;
  }

  getDepartureAirportId() {
    return this.departureAirportId;
  }

  getArrivalAirportId() {
    return this.arrivalAirportId;
  }

  getDepartureTime() {
    return this.departureTime;
  }

  getArrivalTime() {
    return this.arrivalTime;
  }

  getFlightCrew() {
    return this.crew;
  }

  getFlightPassengers() {
    return this.passengers;
  }
  constructor(
    id: FlightId,
    private flightName: FlightName,
    private planeId: PlaneId,
    private departureAirportId: AirportId,
    private arrivalAirportId: AirportId,
    private departureTime: Date,
    private arrivalTime: Date,
    private crew?: CrewMember[],
    private passengers?: Passenger[]
  ){
    super(id);
  }

  static create(
    id: FlightId,
    flightName: FlightName,
    planeId: PlaneId,
    departureAirportId: AirportId,
    arrivalAirportId: AirportId,
    departureTime: Date,
    arrivalTime: Date,
    crew: CrewMember[],
    passengers: Passenger[]
  ){
    return new Flight(
      id,
      flightName,
      planeId,
      departureAirportId,
      arrivalAirportId,
      departureTime,
      arrivalTime, 
      crew,
      passengers
    );
  }
}
export default Flight;