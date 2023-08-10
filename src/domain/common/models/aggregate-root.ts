import Entity from "./entity";
import ValueObject from "./value-object";

class AggregateRoot<Id extends ValueObject> extends Entity<Id>
{
    constructor(id: Id) {
        super(id);
    }
}

export default AggregateRoot