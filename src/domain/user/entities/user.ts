import Entity from "src/domain/common/models/entity";
import UserId from "../value-objects/user-id";
import UserName from "../value-objects/username";
import Email from "../value-objects/user-email";
import HashedPassword from "../value-objects/user-password";
import UserRole from "../value-objects/user-role";

class User extends Entity<UserId>{
  constructor(
    id: UserId,
    private username: UserName,
    private email: Email,
    private hashedPassword: HashedPassword,
    private role: UserRole,
  ) {
    super(id);
  }

  public Equals(other: Entity<UserId>): boolean {
    return this.Id.Equals(other.Id);
  }
}

export default User;