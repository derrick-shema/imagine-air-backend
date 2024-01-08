import Entity from "src/domain/common/models/entity";
import UserId from "../value-objects/user-id";
import Email from "../value-objects/user-email";
import HashedPassword from "../value-objects/user-password";

class User extends Entity<UserId>{
  constructor(
    id: UserId,
    private email: Email,
    private hashedAndSaltedPassword: HashedPassword
  ) {
    super(id);
  }

  public Equals(other: Entity<UserId>): boolean {
    return this.Id.Equals(other.Id);
  }
}

export default User;