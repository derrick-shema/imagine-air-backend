import Entity from "src/domain/common/models/entity";
import PassengerId from "../value-objects/passenger-id";
import SeatDesignation from "src/domain/airplane/value-objects/seat-designation";

class Passenger extends Entity<PassengerId> {
  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getSeat() {
    return this.seat.getValue();
  }
  constructor(
    id: PassengerId,
    private firstName: string,
    private lastName: string,
    private seat: SeatDesignation
  ) {
    super(id);
  }

  create(id: PassengerId, firstName: string, lastName: string, seat: SeatDesignation){
    return new Passenger(
      id,
      firstName,
      lastName,
      seat
    );
  }
}

export default Passenger;