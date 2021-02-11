import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class Think extends Block {
  public readonly opcode = Opcode.Think;

  constructor(
    public message: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      MESSAGE: this.message,
    };
  }
}
