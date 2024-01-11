import { ApiProperty } from "@nestjs/swagger";

export class BaseUserDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string

  @ApiProperty()
  password: string
}