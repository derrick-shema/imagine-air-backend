import Entity from "src/domain/common/models/entity";
import SeatId from "../value-objects/seat-id";
import SeatStatus from "../enums/seat-status";
import SeatDesignation from "../value-objects/seat-designation";

class Seat extends Entity<SeatId> {
  constructor(
    id: SeatId,
    seatDesignation: SeatDesignation,
    status: SeatStatus.AVAILABLE
  ){
    super(id);
  }

  static create(fieldName:string, id: SeatId, seatDesignation: SeatDesignation, status: SeatStatus.AVAILABLE) {
    return new Seat(
      id,
      seatDesignation,
      status
    )
  }
}

export default Seat;