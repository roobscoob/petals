import * as Petals from "../../..";
import { WrapBlock } from "..";
import { Opcode } from "../../types";
import { Script } from "../../script";
import { Inputs } from "../block";

export class If extends WrapBlock {
  public readonly opcode = Opcode.If;

  constructor(
    public condition: Petals.Value,
  ) {
    super(1);
  }

  get body(): Script {
    return this.bodies[0];
  }

  get inputs(): Inputs {
    return {
      CONDITION: this.condition,
      SUBSTACK: this.body,
    };
  }
}
