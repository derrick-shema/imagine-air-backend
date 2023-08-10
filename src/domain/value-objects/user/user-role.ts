import ValueObject from "src/domain/common/models/value-object";

class UserRole extends ValueObject {
  getValue(): string {
    return this.value as Readonly<string>;
  }

  private constructor(private readonly value: string) {
    super();
    // You can implement validation logic here to ensure valid roles
    if (!this.isValidRole(value)) {
      throw new Error('Invalid user role.');
    }
  }

  // Factory method to create a UserRole instance
  static create(role: string): UserRole {
    return new UserRole(role);
  }

   // Validate if a given role is valid
   private isValidRole(role: string): boolean {
    // Implement your validation logic here
    // For example, check if the role is one of the predefined roles
    const validRoles = ['admin', 'crew-member', 'customer-support','passenger'];
    return validRoles.includes(role);
  }

  Equals(other: UserRole): boolean {
    return this.value === other.value;
  }
}

export default UserRole;