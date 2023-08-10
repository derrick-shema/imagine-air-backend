import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";

class Email extends ValueObject {
  // Getter method to access the email value
  getValue(): string {
    return this.value as Readonly<string>;
  }
  // Factory method to create new email instance
  static create(fieldName: string, str: string) {
    return ConstrainedType
        .createString(fieldName, (s => new Email(s)), 256, str);
}
  private constructor(private readonly value: string) {
    super();
    // Validate and sanitize the email address here
    if (!this.isValidEmail(value)) {
      throw new Error('Invalid email address.');
    }
  }

  // Validate email format using a regular expression or other method
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Implement equality comparison if needed
  Equals(other: Email): boolean {
    return this.value === other.value;
  }
}

export default Email;