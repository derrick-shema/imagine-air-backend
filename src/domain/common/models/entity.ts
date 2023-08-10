import Equatable from "./equatable";
import ValueObject from "./value-object";

abstract class Entity<Id extends ValueObject> extends Equatable<Entity<Id>> {
  get Id() {
    return this.id;
  }

  constructor(private id: Id) {
    super();
  }

  public Equals(other: Entity<Id>): boolean {
    return this.Id.Equals(other.Id);
  }
}

export default Entity;