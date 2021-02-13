import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export enum MathOperationOption {
  Abs = "abs",
  Floor = "floor",
  Ceiling = "ceiling",
  Sqrt = "sqrt",
  Sin = "sin",
  Cos = "cos",
  Tan = "tan",
  Asin = "asin",
  Acos = "acos",
  Atan = "atan",
  Ln = "ln",
  Log = "log",
  PowerE = "e ^",
  Power10 = "10 ^",
}

export class LetterOf extends Block {
  public readonly opcode = Opcode.LetterOf;

  constructor(
    public operator: MathOperationOption,
    public num: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      OPERATOR: this.operator,
      NUM: this.num,
    }
  }
}
