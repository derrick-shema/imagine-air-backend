import ValueObject from "../models/value-object";
import ConstrainedType from "../primitives/constrained-type";

class String2 extends ValueObject 
{
    get Value() {
        return this.value;
    }

    static Create(fieldName: string, str: string) {
        return ConstrainedType
            .createString(fieldName, (s => new String2(s)), 2, str);
    }

    Equals(other: String2) {
        return this.Value == other.Value;
    }

    private constructor(private value: string) {
        super();
    }
}
class String3 extends ValueObject 
{
    get Value() {
        return this.value;
    }

    static Create(fieldName: string, str: string) {
        return ConstrainedType
            .createString(fieldName, (s => new String3(s)), 3, str);
    }

    Equals(other: String3) {
        return this.Value == other.Value;
    }

    private constructor(private value: string) {
        super();
    }
}

class String50 extends ValueObject 
{
    get Value() {
        return this.value;
    }

    static Create(fieldName: string, str: string) {
        return ConstrainedType
            .createString(fieldName, (s => new String50(s)), 50, str);
    }

    Equals(other: String50) {
        return this.Value == other.Value;
    }

    private constructor(private value: string) {
        super();
    }
}

class String100 extends ValueObject
{
    get Value() {
        return this.value;
    }

    static Create(fieldName: string, str: string) {
        return ConstrainedType
            .createString(fieldName, (s => new String100(s)), 100, str);
    }

    Equals(other: String100): boolean {
        return this.Value == other.Value;
    }

    private constructor(private value: string) {
        super();
    }
}

export {
    String2,
    String3,
    String50,
    String100,
}