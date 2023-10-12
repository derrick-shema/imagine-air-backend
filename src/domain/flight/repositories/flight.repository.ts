import Flight from "../aggregates/flight";

interface FlightRepository
{
  // Save an flight aggregate
  save(flight: Flight): any;
}

export default FlightRepository;