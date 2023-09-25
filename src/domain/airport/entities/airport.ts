import Entity from "src/domain/common/models/entity";
import AirportId from "../value-objects/airport-id";
import AirportName from "../value-objects/airport-name";
import IATA from "../value-objects/IATA-code";
import CityName from "../value-objects/city-name";
import CityCode from "../value-objects/city-code";

class Airport extends Entity<AirportId> {
  getAirportId() {
    return;
  }

  getAirportName() {
    return this.airportName.getValue() as Readonly<string>;
  }

  getAirportIATA() {
    return this.airportIATA.getValue() as Readonly<string>;
  }

  getCity() {
    return this.city.getValue() as Readonly<string>;
  }

  getCityCode() {
    return this.city_code.getValue() as Readonly<string>;
  }
  
  constructor(
    id: AirportId,
    private airportName: AirportName,
    private airportIATA: IATA,
    private city: CityName,
    private city_code: CityCode
  ) {
    super(id);
  }
}

export default Airport;