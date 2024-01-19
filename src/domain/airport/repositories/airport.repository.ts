import Airport from "../entities/airport";

interface AirportRepository {
  save(airport: Airport): any
}

export default AirportRepository