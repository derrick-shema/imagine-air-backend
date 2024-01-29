import Email from "../value-objects/user-email";
import UserId from "../value-objects/user-id";
import HashedPassword from "../value-objects/user-password";
import User from "./user";

export default class Staff extends User {
  getRole(){
    return this.role;
  }

  getTitle() {
    return this.title;
  }

  constructor(
    id: UserId,
    firstName: string,
    lastName: string,
    email: Email,
    hashedAndSaltedPassword: string,
    private role: string,
    private title: string
  ){
    super(id, firstName, lastName, email, hashedAndSaltedPassword)
  }

  static create(
    id: UserId,
    firstName: string,
    lastName: string,
    email: Email,
    hashedAndSaltedPassword: string,
    role: string,
    title: string
  ){
    return new Staff(
      id,
      firstName,
      lastName,
      email,
      hashedAndSaltedPassword,
      role,
      title
    )
  }
}