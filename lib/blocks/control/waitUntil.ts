import { Opcode, PetalsValue } from "../../types";
import { Inputs, Block } from "../block";

export class WaitUntil extends Block {
  public readonly opcode = Opcode.WaitUntil;

  constructor(
    public condition: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      CONDITION: this.condition,
    };
  }
}
