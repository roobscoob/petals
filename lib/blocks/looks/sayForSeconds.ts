import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class SayForSeconds extends Block {
  public readonly opcode = Opcode.SayForSeconds;

  constructor(
    public message: PetalsValue,
    public seconds: PetalsValue
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      MESSAGE: this.message,
      SECONDS: this.seconds
    };
  }
}
