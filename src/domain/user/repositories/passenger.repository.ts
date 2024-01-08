import Passenger from "src/domain/flight/entities/Passenger";

export default interface PassengerRepository {
  save(passenger: Passenger): any
}