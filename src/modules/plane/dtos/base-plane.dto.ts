import { ApiProperty } from '@nestjs/swagger';
import { BaseCabinSectionDto } from './base-cabin-section.dto';

export class BasePlaneDto {
  @ApiProperty()
  planeId: string;

  @ApiProperty()
  tailNumber: string;

  @ApiProperty()
  planeIATACode: string;

  @ApiProperty()
  maxCapacity: number;

  @ApiProperty()
  cabinSections: BaseCabinSectionDto[];
}