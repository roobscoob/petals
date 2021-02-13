import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class Subtract extends Block {
  public readonly opcode = Opcode.Subtract;

  constructor(
    public num1: PetalsValue,
    public num2: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      NUM1: this.num1,
      NUM2: this.num2,
    }
  }
}
