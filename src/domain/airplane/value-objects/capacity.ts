import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";

class Capacity extends ValueObject {
  private constructor(private value: number) {
    super();
  }

  static create(fieldName: string, num: number) {
    return ConstrainedType
          .createNumber(fieldName, (n => new Capacity(n)), 0, 1000, num)
  }
  Equals(other: Capacity): boolean {
    return this.value == other.value;
}
}

export default Capacity;