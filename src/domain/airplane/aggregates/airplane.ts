import CabinSection from "./cabin-section";
import PlaneId from "../value-objects/plane-id";
import AggregateRoot from "src/domain/common/models/aggregate-root";
import TailNumber from "../value-objects/tail-number";
import PlaneIATACode from "../value-objects/plane-IATA-code";
import Capacity from "../value-objects/capacity";

class Airplane extends AggregateRoot<PlaneId> {
  getTailNumber(){
    return this.tailNumber;
  }
  getPlaneIATACode(){
    return this.planeIATAcode;
  }
  getMaxCapacity(){
    return this.maxCapacity;
  }
  getCabinSections(){
    return this.cabinSections;
  }
  constructor(
    id: PlaneId,
    private tailNumber: TailNumber,
    private planeIATAcode: PlaneIATACode, 
    private maxCapacity: Capacity,
    private cabinSections: CabinSection[]

  ) {
    super(id);
  }

  static create( 
        id: PlaneId, 
        tailNumber: TailNumber, 
        planeIATAcode: PlaneIATACode, 
        maxCapacity: Capacity, 
        cabinSections: CabinSection[]) {
          return new Airplane(
            id,
            tailNumber,
            planeIATAcode,
            maxCapacity,
            cabinSections
          )

  }

  Equals(other: Airplane): boolean {
    return this.Id == other.Id;
  }
}

export default Airplane;