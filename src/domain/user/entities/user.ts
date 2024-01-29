import Entity from "src/domain/common/models/entity";
import UserId from "../value-objects/user-id";
import Email from "../value-objects/user-email";
import HashedPassword from "../value-objects/user-password";

class User extends Entity<UserId>{
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
    return this.hashedAndSaltedPassword;
  }
  
  constructor(
    id: UserId,
    private firstName: string,
    private lastName: string,
    private email: Email,
    private hashedAndSaltedPassword: string
  ) {
    super(id);
  }

  public Equals(other: Entity<UserId>): boolean {
    return this.Id.Equals(other.Id);
  }
}

export default User;