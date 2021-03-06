import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class SetX extends Block {
  public readonly opcode = Opcode.SetX;

  constructor(
    public x: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      X: this.x,
    };
  }
}
