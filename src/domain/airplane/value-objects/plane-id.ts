import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";
import { v4 as uuidv4 } from 'uuid';

class PlaneId extends ValueObject 
{
    static createUnique() {
        return this.create("PlaneId", uuidv4());
    }

    static create(fieldName: string, str: string) {
        return ConstrainedType
            .createString(fieldName, (s => new PlaneId(s)), 36, str);
    }

    getValue() {
        return this.value as Readonly<string>;
    }

    Equals(other: PlaneId): boolean {
        return this.value === other.value;
    }

    private constructor(private value: string) {
        super();
    }
}

export default PlaneId