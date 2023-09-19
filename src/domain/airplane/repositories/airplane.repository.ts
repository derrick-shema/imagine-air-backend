import Airplane from "../aggregates/airplane";
import PlaneId from "../value-objects/plane-id";

interface AirplaneRepository
{
  // Save an airplane aggregate
  save(airplane: Airplane): any;

  // Find an airplane by its ID
  // findById(planeId: PlaneId): Promise<Airplane | null>;

  // // Find all airplanes
  // findAll(): Promise<Airplane[]>;

  // // Update an existing airplane
  // update(airplane: Airplane): Promise<void>;

  // // Delete an airplane
  // delete(planeId: PlaneId): Promise<void>;
}

export default AirplaneRepository;