import { Sprite } from "../../targets/sprite";
import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

import { GotoOption, GotoMenu } from "./goto";

export class GlideTo extends Block {
    public readonly opcode = Opcode.GlideTo;
  
    get targetName(): PetalsValue {
      return this.target instanceof Sprite
        ? this.target.name
        : this.target;
    }
  
    constructor(
      public target: GotoOption | PetalsValue | Sprite,
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
