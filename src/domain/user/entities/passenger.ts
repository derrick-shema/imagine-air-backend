import Email from "../value-objects/user-email";
import UserId from "../value-objects/user-id";
import HashedPassword from "../value-objects/user-password";
import User from "./user";

class Passenger extends User {
  constructor(
    id: UserId,
    firstName: string,
    lastName: string,
    email: Email,
    hashedAndSaltedPassword: string,
    private bookingId: string
  ) {
    super(id, firstName, lastName, email, hashedAndSaltedPassword);
  }

  // You can add additional methods or properties specific to passengers if needed
  static create(
    id: UserId,
    firstName: string,
    lastName: string,
    email: Email,
    hashedAndSaltedPassword: string,
    bookingId: string
  ) {
    return new Passenger(
      id,
      firstName,
      lastName, 
      email,
      hashedAndSaltedPassword,
      bookingId
    )
  }

  getBookingId(){
    return this.bookingId;
  }
}

export default Passenger;