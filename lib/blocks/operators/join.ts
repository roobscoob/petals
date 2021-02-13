import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class Join extends Block {
  public readonly opcode = Opcode.Join;

  constructor(
    public string1: PetalsValue,
    public string2: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      STRING1: this.string1,
      STRING2: this.string2,
    }
  }
}
