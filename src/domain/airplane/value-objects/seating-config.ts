import ValueObject from "src/domain/common/models/value-object";

class SeatingConfiguration extends ValueObject {
  private constructor(
    private sections: string[]
  ){
    super();
  }
}