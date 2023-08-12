import {hash, compare} from 'bcrypt'
import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from 'src/domain/common/primitives/constrained-type';

class HashedPassword extends ValueObject {
  getValue(): string {
    return this.value as Readonly<string>;
  }

  private constructor(private readonly value: string) {
    super()
  }

  // Factory method to hash a plain password
  static async create(fieldName: string, plainPassword: string): Promise<HashedPassword> {
    const hashedPassword = await hash(plainPassword, 10);
    return ConstrainedType
        .createString(fieldName, (s => new HashedPassword(s)), 256, hashedPassword);
  }

  // Verify plain password against hashed password
  async verify(plainPassword: string): Promise<boolean> {
    return compare(plainPassword, this.value);
  }

  Equals(other: HashedPassword): boolean {
    return this.value === other.value;
  }
}

export default HashedPassword;