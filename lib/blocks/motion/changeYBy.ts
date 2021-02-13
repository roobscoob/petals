import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class ChangeYBy extends Block {
  public readonly opcode = Opcode.ChangeYBy;

  constructor(
    public dy: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      DY: this.dy,
    };
  }
}
