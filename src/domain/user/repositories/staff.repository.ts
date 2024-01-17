import Staff from "../entities/staff";

export default interface StaffRepository {
  save(staff: Staff): any
}