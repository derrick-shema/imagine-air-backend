import AggregateRoot from "src/domain/common/models/aggregate-root";
import CabinSectionId from "../value-objects/cabin-section-id";
import Seat from "../entities/seat";

class CabinSection extends AggregateRoot<CabinSectionId>{
  private constructor(
    private sectionName: string,
    cabinSectionId: CabinSectionId,
    private rows: number,
    private arrangement: number[],
    private seats: Seat[]
  ){
    super(cabinSectionId);
  }

  static create(
      sectionName: string, cabinSectionId: CabinSectionId, rows: number,arrangement: number[], seats: Seat[] ) {
      return new CabinSection(
        sectionName,
        cabinSectionId,
        rows,
        arrangement,
        seats
      )
  }

  Equals(other: CabinSection): boolean {
    return this.Id == other.Id;
  }
}

export default CabinSection;