// Properties
// plane id: for internal use
//plane ARN or Tail Number: for regulatory purposes
// make and model

import Entity from "src/domain/common/models/entity";
import CabinSection from "../value-objects/seatSection";
import PlaneId from "../value-objects/plane-id";

//Methods
//createPlane: takes in 
//generate seatmap-helper function that designates seat numbers
class Airplane extends Entity<PlaneId> {
  constructor(
    id: PlaneId,
    private tailNumber: string,
    private planeIATAcode: string, 
    private maxCapacity: number,
    private cabinSections: CabinSection[]

  ) {
    super(id);
  }
}

export default Airplane;