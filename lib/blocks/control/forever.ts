import { WrapBlock } from "..";
import { Opcode } from "../../types";
import { Script } from "../../script";
import { Inputs } from "../block";

export class Forever extends WrapBlock {
  public readonly opcode = Opcode.Forever;

  constructor() {
    super(1);
  }

  get body(): Script {
    return this.bodies[0];
  }

  get inputs(): Inputs {
    return {
      SUBSTACK: this.body,
    };
  }
}
