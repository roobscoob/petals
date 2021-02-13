import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class LessThan extends Block {
  public readonly opcode = Opcode.LessThan;

  constructor(
    public operand1: PetalsValue,
    public operand2: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      OPERAND1: this.operand1,
      OPERAND2: this.operand2,
    }
  }
}
