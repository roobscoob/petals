import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class ChangeXBy extends Block {
  public readonly opcode = Opcode.ChangeXBy;

  constructor(
    public dx: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      DX: this.dx,
    };
  }
}
