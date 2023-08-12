import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";

class UserId extends ValueObject 
{
    static CreateUnique() {
        return this.Create("UserId", "some_unique_string");
    }

    static Create(fieldName: string, str: string) {
        return ConstrainedType
            .createString(fieldName, (s => new UserId(s)), 20, str);
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