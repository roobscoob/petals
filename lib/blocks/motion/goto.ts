import { Sprite } from "../../targets/sprite";
import { Opcode, PetalsValue } from "../../types";
import { Block, Fields, Inputs } from "../block";
import { Reporter } from "../reporter";

export enum GotoOption {
  Random = "random position",
  Mouse = "mouse-pointer",
}

export class GotoMenu extends Reporter {
  public readonly opcode = Opcode.GotoMenu;

  constructor(
    public readonly sprite: Sprite,
  ) {
    super();
  }

  get fields(): Fields {
    return {
      TARGET_OPTION: this.sprite.name,
    };
  }
}

export class Goto extends Block {
  public readonly opcode = Opcode.Goto;

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
