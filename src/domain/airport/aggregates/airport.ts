import Entity from "src/domain/common/models/entity";
import AirportId from "../value-objects/airport-id";
import AirportName from "../value-objects/airport-name";
import IATA from "../value-objects/IATA-code";

class Airport extends Entity<AirportId> {
  constructor(
    id: AirportId,
    private airportName: AirportName,
    private IATA: IATA
  ) {
    super(id);
  }
}

export default Airport;