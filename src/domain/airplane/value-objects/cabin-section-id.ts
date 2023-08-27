import ValueObject from "src/domain/common/models/value-object";
import ConstrainedType from "src/domain/common/primitives/constrained-type";
import { v4 as uuidv4 } from 'uuid';

class CabinSectionId extends ValueObject 
{
    static createUnique() {
        return this.create("PlaneId", uuidv4());
    }

    static create(fieldName: string, str: string) {
        return ConstrainedType
            .createString(fieldName, (s => new CabinSectionId(s)), 36, str);
    }

    getValue() {
        return this.value as Readonly<string>;
    }

    Equals(other: CabinSectionId): boolean {
        return this.value === other.value;
    }

    private constructor(private value: string) {
        super();
    }
}

export default CabinSectionId;
