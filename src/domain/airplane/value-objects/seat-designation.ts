import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";

class SeatDesignation extends ValueObject {
  static create(fieldName: string, str: string) {
    return ConstrainedType
        .createString(fieldName, (s => new SeatDesignation(s)), 2, str);
}

getValue() {
    return this.value as Readonly<string>;
}

Equals(other: SeatDesignation): boolean {
    return this.value === other.value;
}

private constructor(private value: string) {
    super();
}
}

export default SeatDesignation ;





