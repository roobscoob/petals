import * as Petals from "../../..";
import { WrapBlock } from "..";
import { Opcode } from "../../types";
import { Script } from "../../script";
import { Inputs } from "../block";

export class IfElse extends WrapBlock {
  public readonly opcode = Opcode.IfElse;

  constructor(
    public condition: Petals.Value,
  ) {
    super(1);
  }

  get ifTrue(): Script {
    return this.bodies[0];
  }

  get ifFalse(): Script {
    return this.bodies[1];
  }

  get inputs(): Inputs {
    return {
      CONDITION: this.condition,
      SUBSTACK: this.ifTrue,
      SUBSTACK2: this.ifFalse,
    };
  }
}
