import { Opcode, PetalsValue } from "../../types";
import { Inputs, Block } from "../block";

export class Wait extends Block {
  public readonly opcode = Opcode.Wait;

  constructor(
    public duration: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      DURATION: this.duration,
    };
  }
}
