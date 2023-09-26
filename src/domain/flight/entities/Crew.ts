import Entity from "src/domain/common/models/entity";
import CrewMemberId from "../value-objects/crew-member-id";

class CrewMember extends Entity<CrewMemberId> {
  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getRole() {
    return this.role;
  }
  constructor(
    id: CrewMemberId,
    private firstName: string,
    private lastName: string,
    private role: string
  ){
    super(id);
  }

  create(id: CrewMemberId, firstName: string, lastName: string, role: string) {
    return new CrewMember(
      id,
      firstName,
      lastName,
      role
    );
  }
}

export default CrewMember;