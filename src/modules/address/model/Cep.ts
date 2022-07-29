import { IsString, Length } from "class-validator";

export class Cep {
  @IsString()
  @Length(8, 8)
  cep: string;
}
