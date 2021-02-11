import { Reporter } from "../..";
import { Opcode } from "../../../types";

export class Variable extends Reporter {
  public opcode = Opcode.Variable;

  constructor(
    public readonly name: string,
    public initialValue: string | number = 0,
  ) {
    super();
  }
}
