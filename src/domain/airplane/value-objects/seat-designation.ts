import ValueObject from "src/domain/common/models/value-object";

class SeatDesignation extends ValueObject {
  getRowNumber(): number {
    return this.rowNumber;
  }

  getSeatLetter(): string {
    return this.seatLetter;
  }

  private constructor(
    private readonly rowNumber: number,
    private readonly seatLetter: string
  ) {
    super();
  }

  static create(rowNumber: number, seatLetter: string): SeatDesignation {
    // Validate row number and seat letter if needed
    return new SeatDesignation(rowNumber, seatLetter);
  }

  toString(): string {
    return `${this.rowNumber}${this.seatLetter}`;
  }

  Equals(other: SeatDesignation): boolean {
      return this.toString == other.toString;
  }

  // Other methods and validations...
}

export default SeatDesignation ;





