import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";

class FlightName extends ValueObject {

  getValue() {
    return this.value as Readonly<string>;
  }
  constructor(private value: string) {
    super();
  }

  static create(fieldName: string, str: string) {
    return ConstrainedType
        .createString(fieldName, (s => new FlightName(s)), 36, str);
  }

  Equals(other: FlightName): boolean {
    return this.value === other.value;
  }
}

export default FlightName;