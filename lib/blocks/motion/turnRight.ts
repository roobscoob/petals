import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class TurnRight extends Block {
  public readonly opcode = Opcode.TurnRight;

  constructor(
    public degrees: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      DEGREES: this.degrees,
    };
  }
}
