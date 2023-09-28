import Flight from "../aggregates/flight";

interface FlightRepository
{
  // Save an flight aggregate
  save(airplane: Flight): any;
}

export default FlightRepository;