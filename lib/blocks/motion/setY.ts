import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class SetY extends Block {
  public readonly opcode = Opcode.SetY;

  constructor(
    public y: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      Y: this.y,
    };
  }
}
