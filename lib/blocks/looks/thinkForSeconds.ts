import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class ThinkForSeconds extends Block {
  public readonly opcode = Opcode.ThinkForSeconds;

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
