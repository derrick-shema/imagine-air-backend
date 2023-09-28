import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";
import { v4 as uuidv4 } from 'uuid';

class AirportId extends ValueObject {
  getValue() {
    return this.value as Readonly<string>;
  }
  private constructor(private value: string) {
    super();
  }

  static createUnique() {
    return this.create("PlaneId", uuidv4());
}

  static create(fieldName: string, str: string) {
    return ConstrainedType
        .createString(fieldName, (s => new AirportId(s)), 20, str);
}

  Equals(other: AirportId): boolean {
    return this.value === other.value;
  }
}

export default AirportId;