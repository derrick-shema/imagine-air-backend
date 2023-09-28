import AggregateRoot from "src/domain/common/models/aggregate-root";
import FlightId from "../value-objects/flight-id";
import FlightName from "../value-objects/flight-name";
import Airplane from "src/domain/airplane/aggregates/airplane";
import Airport from "src/domain/airport/entities/airport";
import CrewMember from "../entities/Crew";
import Passenger from "../entities/Passenger";

class Flight extends AggregateRoot<FlightId> {
  getFlightName() {
    return this.flightName;
  }

  getFlightPlane() {
    return this.plane;
  }

  getDepartureAirport() {
    return this.departureAirport;
  }

  getArrivalAirport() {
    return this.arrivalAirport;
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
    private plane: Airplane,
    private departureAirport: Airport,
    private arrivalAirport: Airport,
    private departureTime: Date,
    private arrivalTime: Date,
    private crew: CrewMember[],
    private passengers: Passenger[]
  ){
    super(id);
  }

  static create(
    id: FlightId,
    flightName: FlightName,
    plane: Airplane,
    departureAirport: Airport,
    arrivalAirport: Airport,
    departureTime: Date,
    arrivalTime: Date,
    crew: CrewMember[],
    passengers: Passenger[]
  ){
    return new Flight(
      id,
      flightName,
      plane,
      departureAirport,
      arrivalAirport,
      departureTime,
      arrivalTime, 
      crew,
      passengers
    );
  }
}
export default Flight;