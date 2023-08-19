

import ValueObject from "src/domain/common/models/value-object";

class CabinSection extends ValueObject{
  private constructor(
    private sectionName: string,
    private rows: number,
    private aisles: number,
    private arrangement: number[],
  ){
    super();
  }

  static create(
      sectionName: string, rows: number, aisles: number, arrangement: number[] ) {
      return new CabinSection(
        sectionName,
        rows,
        aisles,
        arrangement
      )
  }

  Equals(other: CabinSection): boolean {
    return this.sectionName == other.sectionName;
  }
}

export default CabinSection;