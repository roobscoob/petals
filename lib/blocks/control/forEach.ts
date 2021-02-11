import * as Petals from "../../..";
import { WrapBlock } from "..";
import { Opcode } from "../../types";
import { Script } from "../../script";
import { Inputs, Fields } from "../block";
import { Variable } from "../../variables";

export class ForEach extends WrapBlock {
  public readonly opcode = Opcode.ForEach;

  constructor(
    public variable: Variable,
    public value: Petals.Value,
  ) {
    super(1);
  }

  get body(): Script {
    return this.bodies[0];
  }

  get inputs(): Inputs {
    return {
      VALUE: this.value,
      SUBSTACK: this.body,
    };
  }

  get fields(): Fields {
    return {
      VARIABLE: this.variable,
    };
  }
}
