import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";
import { v4 as uuidv4 } from 'uuid';

class PassengerId extends ValueObject {

  getValue() {
    return this.value as Readonly<string>;
  }
  constructor(private value: string) {
    super();
  }

  static createUnique() {
    return this.create("PassengerId", uuidv4());
  }

  static create(fieldName: string, str: string) {
    return ConstrainedType
        .createString(fieldName, (s => new PassengerId(s)), 36, str);
  }

  Equals(other: PassengerId): boolean {
    return this.value === other.value;
  }
}

export default PassengerId;