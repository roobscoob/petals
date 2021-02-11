import * as Petals from "../../..";
import { WrapBlock } from "..";
import { Opcode } from "../../types";
import { Script } from "../../script";
import { Inputs } from "../block";

export class Repeat extends WrapBlock {
  public readonly opcode = Opcode.Repeat;

  constructor(
    public times: Petals.Value,
  ) {
    super(1);
  }

  get body(): Script {
    return this.bodies[0];
  }

  get inputs(): Inputs {
    return {
      TIMES: this.times,
      SUBSTACK: this.body,
    };
  }
}
