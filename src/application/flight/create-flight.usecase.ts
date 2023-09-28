import { Injectable } from "@nestjs/common";
import Airplane from "src/domain/airplane/aggregates/airplane";
import CabinSection from "src/domain/airplane/aggregates/cabin-section";
import Seat from "src/domain/airplane/entities/seat";
import CabinSectionId from "src/domain/airplane/value-objects/cabin-section-id";
import Capacity from "src/domain/airplane/value-objects/capacity";
import PlaneIATACode from "src/domain/airplane/value-objects/plane-IATA-code";
import PlaneId from "src/domain/airplane/value-objects/plane-id";
import SeatDesignation from "src/domain/airplane/value-objects/seat-designation";
import SeatId from "src/domain/airplane/value-objects/seat-id";
import TailNumber from "src/domain/airplane/value-objects/tail-number";
import Airport from "src/domain/airport/entities/airport";
import IATA from "src/domain/airport/value-objects/IATA-code";
import AirportId from "src/domain/airport/value-objects/airport-id";
import AirportName from "src/domain/airport/value-objects/airport-name";
import CityCode from "src/domain/airport/value-objects/city-code";
import CityName from "src/domain/airport/value-objects/city-name";
import Flight from "src/domain/flight/aggregates/flight";
import CrewMember from "src/domain/flight/entities/Crew";
import Passenger from "src/domain/flight/entities/Passenger";
import FlightRepository from "src/domain/flight/repositories/flight.repository";
import CrewMemberId from "src/domain/flight/value-objects/crew-member-id";
import FlightId from "src/domain/flight/value-objects/flight-id";
import FlightName from "src/domain/flight/value-objects/flight-name";
import PassengerId from "src/domain/flight/value-objects/passenger-id";
import { CreateFlightDto } from "src/modules/flight/dto/create-flight.dto";

@Injectable()
export class CreateFlightUseCase {
  constructor(private readonly flightRepository: FlightRepository){}

  async execute(dto: CreateFlightDto): Promise<Flight> {
    const flight = Flight.create(
      FlightId.createUnique(),
      FlightName.create('flight name', dto.flightName),
      Airplane.create(
        PlaneId.create('plane id', dto.plane.planeId),
        TailNumber.create('tail number', dto.plane.tailNumber),
        PlaneIATACode.create('plane IATA code', dto.plane.planeIATACode),
        Capacity.create('plane capacity', dto.plane.maxCapacity),
        dto.plane.cabinSections.map(section => CabinSection.create(
          CabinSectionId.create('cabin section id', section.cabinSectionId),
          section.sectionName,
          section.rows,
          section.arrangement,
          section.seats.map(s => Seat.create(
            SeatId.create('seat id', s.seatId),
            SeatDesignation.create('Seat Designation',s.seatDesignation),
            s.status
          ))
        ))
      ),
      Airport.create(
        AirportId.createUnique(),
        AirportName.create('airport name', dto.departureAirport.airportName),
        IATA.create('airport IATA', dto.departureAirport.airportIATA),
        CityName.create('city name', dto.departureAirport.city),
        CityCode.create('city code', dto.departureAirport.city_code)
      ),
      Airport.create(
        AirportId.createUnique(),
        AirportName.create('airport name', dto.arrivalAirport.airportName),
        IATA.create('airport IATA', dto.arrivalAirport.airportIATA),
        CityName.create('city name', dto.arrivalAirport.city),
        CityCode.create('city code', dto.arrivalAirport.city_code)
      ),
      dto.departureTime,
      dto.arrivalTime,
      dto.crew.map(c => CrewMember.create(
        CrewMemberId.create('crew member id', c.crewMemberId),
        c.firstName,
        c.lastName,
        c.role
      )),
      dto.passengers.map(p => Passenger.create(
        PassengerId.createUnique(),
        p.firstName,
        p.lastName,
        SeatDesignation.create('seat designation', p.seat)
      ))
    )
    return flight;
  }
}