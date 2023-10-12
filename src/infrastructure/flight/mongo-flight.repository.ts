import { InjectModel } from "@nestjs/mongoose";
import FlightRepository from "src/domain/flight/repositories/flight.repository";
import { FlightDocument, FlightModel } from "./flight-schema";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import Flight from "src/domain/flight/aggregates/flight";

@Injectable()
export class MongoFlightRepository implements FlightRepository {
  constructor(@InjectModel(FlightModel.name) private readonly flightModel: Model<FlightDocument>){};
  
  async save(flight: Flight) {
    const flightId = flight.Id.getValue();
    const flightName = flight.getFlightName().getValue();
    const planeId = flight.getFlightPlane().Id.getValue();
    const flightPlane = {
      planeId,
      tailNumber: flight.getFlightPlane().getTailNumber(),
      planeIATAcode: flight.getFlightPlane().getPlaneIATACode(),
      maxCapacity: flight.getFlightPlane().getMaxCapacity(),
      cabinSections: flight.getFlightPlane().getCabinSections().map(section => ({
        cabinSectionId: section.Id.getValue(),
        sectionName: section.getSectionName(),
        rows: section.getRows(),
        arrangement: section.getArrangement(),
        seats: section.getSeats().map(seat => ({
          seatId: seat.Id.getValue(),
          seatDesignation: seat.getSeatDesignation(),
          seatStatus: seat.getSeatStatus()
        })),
      })),
    };
    const departureAirportId = flight.getDepartureAirport().Id.getValue();
    const departureAirport = {
      departureAirportId,
      airportName: flight.getDepartureAirport().getAirportName(),
      airportIATA: flight.getDepartureAirport().getAirportIATA(),
      airportCity: flight.getDepartureAirport().getCity(),
      airportCityCode: flight.getDepartureAirport().getCityCode()
    };
    const arrivalAirportId = flight.getArrivalAirport().Id.getValue();
    const arrivalAirport = {
      arrivalAirportId,
      airportName: flight.getArrivalAirport().getAirportName(),
      airportIATA: flight.getArrivalAirport().getAirportIATA(),
      airportCity: flight.getArrivalAirport().getCity(),
      airportCityCode: flight.getArrivalAirport().getCityCode()
    };
    const departureTime = flight.getDepartureTime();
    const arrivalTime = flight.getArrivalTime();
    const crew = flight.getFlightCrew().map(c => ({
      crewMemberId: c.Id.getValue(),
      firstName: c.getFirstName(),
      lastName: c.getLastName(),
      role: c.getRole()
    }));
    const passengers = flight.getFlightPassengers().map(p => ({
      passengerId: p.Id.getValue(),
      firstName: p.getFirstName(),
      lastName: p.getLastName(),
      seatDesignation: p.getSeat()
    }));

    const flightData = {
      flightId,
      flightName,
      flightPlane,
      departureAirport,
      arrivalAirport,
      departureTime,
      arrivalTime, 
      crew, 
      passengers
    }

    const newFlight = new this.flightModel(flightData);
    await newFlight.save();
  }
}