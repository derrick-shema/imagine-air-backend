import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";
import { v4 as uuidv4 } from 'uuid';

class CrewMemberId extends ValueObject {

  getValue() {
    return this.value as Readonly<string>;
  }
  constructor(private value: string) {
    super();
  }

  static createUnique() {
    return this.create("CrewMemberId", uuidv4());
  }

  static create(fieldName: string, str: string) {
    return ConstrainedType
        .createString(fieldName, (s => new CrewMemberId(s)), 36, str);
  }

  Equals(other: CrewMemberId): boolean {
    return this.value === other.value;
  }
}

export default CrewMemberId;