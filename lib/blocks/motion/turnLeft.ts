import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class TurnLeft extends Block {
  public readonly opcode = Opcode.TurnLeft;

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
