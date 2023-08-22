import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";

class TailNumber extends ValueObject {
  getValue() {
    return this.value as Readonly<string>;
  }
  private constructor( private value: string){
    super();
  }

  static create(fieldName: string, str: string) {
    return ConstrainedType.createString(fieldName, (s => new TailNumber(s)), 6, str)
  }
  Equals(other: TailNumber): boolean {
      return this.value == other.value;
  }
}

export default TailNumber;