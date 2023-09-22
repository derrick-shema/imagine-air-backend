import Entity from "src/domain/common/models/entity";
import SeatId from "../value-objects/seat-id";
import SeatStatus from "../enums/seat-status";
import SeatDesignation from "../value-objects/seat-designation";

class Seat extends Entity<SeatId> {
  getSeatDesignation() {
    return this.seatDesignation.getValue();
  }
  getSeatStatus(){
    return this.status;
  }

  constructor(
    id: SeatId,
    private seatDesignation: SeatDesignation,
    private status: string
  ){
    super(id);
  }



  static create(id: SeatId, seatDesignation: SeatDesignation, status: string) {
    return new Seat(
      id,
      seatDesignation,
      status
    )
  }
}

export default Seat;