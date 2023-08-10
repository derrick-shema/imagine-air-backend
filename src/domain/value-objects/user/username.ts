import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";

class UserName extends ValueObject {
  getValue(): string {
    return this.value as Readonly<string>;
  }
  // Factory method to create new email instance
  static create(fieldName: string, str: string) {
    return ConstrainedType
        .createString(fieldName, (s => new UserName(s)), 256, str);
}
  private constructor (private readonly value: string) {
    super();
  }
  Equals(other: UserName): boolean {
    return this.value === other.value;
  }
}

export default UserName;