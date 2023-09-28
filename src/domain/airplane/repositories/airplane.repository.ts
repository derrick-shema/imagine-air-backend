import Airplane from "../aggregates/airplane";

interface AirplaneRepository
{
  // Save an airplane aggregate
  save(airplane: Airplane): any;
}

export default AirplaneRepository;