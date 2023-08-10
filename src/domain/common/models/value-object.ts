import Equatable from "./equatable";

abstract class ValueObject extends Equatable<ValueObject> 
{
    abstract Equals(other: ValueObject): boolean;
}

export default ValueObject