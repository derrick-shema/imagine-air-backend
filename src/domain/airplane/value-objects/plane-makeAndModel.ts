import ValueObject from "src/domain/common/models/value-object";
import CabinSection from "./seatSection";

class MakeAndModel extends ValueObject {
  getPlaneIATACode() {
    return this.planeIATAcode as Readonly<string>;
  }

  getMaxCapacity() {
    return this.maxCapacity as Readonly<number>;
  }

  getCabinSection() {
    return this.cabinSections;
  }

  static create(planeIATAcode: string, maxCapacity: number, cabinSections: CabinSection[]) {
    return new MakeAndModel(
      planeIATAcode,
      maxCapacity,
      cabinSections
    )
  }
  private constructor(
    private planeIATAcode: string, 
    private maxCapacity: number,
    private cabinSections: CabinSection[]
    ) {
    super();
  }

  Equals(other: MakeAndModel): boolean {
      return this.planeIATAcode == other.planeIATAcode;
  }
}

export default MakeAndModel;