import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";

class IATA extends ValueObject {
  getValue() {
    return this.value as Readonly<string>;
  }
  private constructor(private value: string) {
    super()
  }

  static create(fieldName: string, str: string) {
    return ConstrainedType
          .createString(fieldName, (s => new IATA(s)), 20, str);
  }

  Equals(other: IATA): boolean {
    return this.value === other.value;
  }
}
export default IATA;