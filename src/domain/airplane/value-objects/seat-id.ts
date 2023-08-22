import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";

class SeatId extends ValueObject 
{
    // static createUnique() {
    //     return this.create("SeatId", uuidv4());
    // }

    static create(fieldName: string, str: string) {
        return 'st_'+ ConstrainedType
            .createString(fieldName, (s => new SeatId(s)), 36, str);
    }

    getValue() {
        return this.value as Readonly<string>;
    }

    Equals(other: SeatId): boolean {
        return this.value === other.value;
    }

    private constructor(private value: string) {
        super();
    }
}

export default SeatId;