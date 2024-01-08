import Email from "../value-objects/user-email";
import UserId from "../value-objects/user-id";
import HashedPassword from "../value-objects/user-password";
import User from "./user";

class Passenger extends User {
  constructor(
    id: UserId,
    email: Email,
    hashedAndSaltedPassword: HashedPassword,
    private bookingId: string
  ) {
    super(id, email, hashedAndSaltedPassword);
  }

  // You can add additional methods or properties specific to passengers if needed

  public get BookingId(): string {
    return this.bookingId;
  }
}

export default Passenger;