import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";

class AirportId extends ValueObject {
  getValue() {
    return this.value as Readonly<string>;
  }
  private constructor(private value: string) {
    super();
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