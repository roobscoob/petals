import { Sprite } from "../../targets/sprite";
import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

import { GotoOption, GotoMenu } from "./goto";

export class PointTowards extends Block {
  public readonly opcode = Opcode.PointTowards;

  constructor(
    public target: GotoOption | Sprite | PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      TARGET: this.target instanceof Sprite
        ? new GotoMenu(this.target)
        : this.target,
    };
  }
}
