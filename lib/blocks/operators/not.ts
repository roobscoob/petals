import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class Not extends Block {
  public readonly opcode = Opcode.Not;

  constructor(
    public operand: PetalsValue
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      OPERAND: this.operand,
    }
  }
}
