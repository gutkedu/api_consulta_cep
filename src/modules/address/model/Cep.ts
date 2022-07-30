import { IsNumberString, IsString, Length } from "class-validator";

export class Cep {
  @IsString()
  @Length(8, 8)
  @IsNumberString()
  cep: string;
}
