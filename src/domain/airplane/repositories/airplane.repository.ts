import Airplane from "../aggregates/airplane";
import PlaneId from "../value-objects/plane-id";

interface AirplaneRepository
{
  // Save an airplane aggregate
  save(airplane: Airplane): any;
}

export default AirplaneRepository;