import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class Length extends Block {
  public readonly opcode = Opcode.Length;

  constructor(
    public string: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      STRING: this.string,
    }
  }
}
