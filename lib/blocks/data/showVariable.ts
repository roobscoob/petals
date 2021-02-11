import { Opcode } from "../../types";
import { Block, Fields } from "../block";
import { Variable } from "./variables";

export class ShowVariable extends Block {
  public readonly opcode = Opcode.ShowVariable;

  constructor(
    public variable: Variable,
  ) {
    super();
  }

  get fields(): Fields {
    return {
      VARIABLE: this.variable,
    };
  }
}
