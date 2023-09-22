import AggregateRoot from "src/domain/common/models/aggregate-root";
import CabinSectionId from "../value-objects/cabin-section-id";
import Seat from "../entities/seat";

class CabinSection extends AggregateRoot<CabinSectionId>{
  getSectionName() {
    return this.sectionName;
  }
  getRows() {
    return this.rows;
  }
  getArrangement() {
    return this.arrangement;
  }
  getSeats() {
    return this.seats;
  }
  private constructor(
    cabinSectionId: CabinSectionId,
    private sectionName: string,
    private rows: number,
    private arrangement: number[],
    private seats: Seat[]
  ){
    super(cabinSectionId);
  }

  static create(
    cabinSectionId: CabinSectionId, sectionName: string, rows: number,arrangement: number[], seats: Seat[] ) {
      return new CabinSection(
        cabinSectionId,
        sectionName,
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