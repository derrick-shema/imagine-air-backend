import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";

class SeatDesignation extends ValueObject {
  // getRowNumber(): number {
  //   return this.rowNumber;
  // }

  // getSeatLetter(): string {
  //   return this.seatLetter;
  // }

  // private constructor(
  //   private readonly rowNumber: number,
  //   private readonly seatLetter: string
  // ) {
  //   super();
  // }

  // static create(rowNumber: number, seatLetter: string): SeatDesignation {
  //   // Validate row number and seat letter if needed
  //   return new SeatDesignation(rowNumber, seatLetter);
  // }

  // toString(): string {
  //   return `${this.rowNumber}${this.seatLetter}`;
  // }

  // Equals(other: SeatDesignation): boolean {
  //     return this.toString == other.toString;
  // }

  // Other methods and validations...
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





