import Entity from "src/domain/common/models/entity";
import PassengerId from "../value-objects/passenger-id";
import SeatDesignation from "src/domain/airplane/value-objects/seat-designation";
import Email from "src/domain/user/value-objects/user-email";
import HashedPassword from "src/domain/user/value-objects/user-password";
import BookingId from "src/domain/booking/value-objects/booking-id";

class Passenger extends Entity<PassengerId> {
  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getEmail() {
    return this.email.getValue();
  }
  getHashedAndSaltedPassword() {
    return this.hashedAndSaltedPassword.getValue();
  }
  getBookingId() {
    return this.bookingId.getValue();
  }
  constructor(
    id: PassengerId,
    private firstName: string,
    private lastName: string,
    private email: Email,
    private hashedAndSaltedPassword: HashedPassword,
    private bookingId: BookingId

  ) {
    super(id);
  }

  static create(
    id: PassengerId, 
    firstName: string, 
    lastName: string, 
    email: Email,
    hashedAndSaltedPassword: HashedPassword,
    bookingId: BookingId){
    return new Passenger(
      id,
      firstName,
      lastName,
      email,
      hashedAndSaltedPassword,
      bookingId
    );
  }
}

export default Passenger;