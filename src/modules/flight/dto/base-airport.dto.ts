import { ApiProperty } from "@nestjs/swagger";

export class BaseAirportDto {
  @ApiProperty()
  airportId: string;

  @ApiProperty()
  airportName: string;

  @ApiProperty()
  airportIATA: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  city_code: string;
}