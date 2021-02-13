import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class ChangeSizeBy extends Block {
  public readonly opcode = Opcode.ChangeSizeBy;

  constructor(
    public change: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      CHANGE: this.change,
    };
  }
}
