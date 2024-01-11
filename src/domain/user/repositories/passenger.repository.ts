import Passenger from "src/domain/user/entities/Passenger";

export default interface PassengerRepository {
  save(passenger: Passenger): any
}