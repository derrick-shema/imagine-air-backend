import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";
import { v4 as uuidv4 } from 'uuid';

class UserId extends ValueObject 
{
    static CreateUnique() {
        return this.Create("UserId", uuidv4());
    }

    static Create(fieldName: string, str: string) {
        return ConstrainedType
            .createString(fieldName, (s => new UserId(s)), 36, str);
    }

    get Value() {
        return this.value as Readonly<string>;
    }

    Equals(other: UserId): boolean {
        return this.Value === other.Value;
    }

    private constructor(private value: string) {
        super();
    }
}

export default UserId