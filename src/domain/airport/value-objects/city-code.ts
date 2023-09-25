import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";

class CityCode extends ValueObject {
  getValue() {
    return this.value as Readonly<string>;
  }
  private constructor(private value: string) {
    super();
  }

  static create(fieldName: string, str: string) {
    return ConstrainedType
        .createString(fieldName, (s => new CityCode(s)), 10, str);
}

  Equals(other: CityCode): boolean {
    return this.value === other.value;
  }
}

export default CityCode;