import { Sprite } from "../../targets/sprite";
import { Opcode, PetalsValue } from "../../types";
import { Block, Fields, Inputs } from "../block";
import { Reporter } from "../reporter";

export enum PointTowardsOption {
  Random = "random position",
  Mouse = "mouse-pointer",
}

export class PointTowardsMenu extends Reporter {
  public readonly opcode = Opcode.PointTowardsMenu;

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

export class PointTowards extends Block {
  public readonly opcode = Opcode.PointTowards;

  constructor(
    public target: PointTowardsOption | Sprite | PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      TARGET: this.target instanceof Sprite
        ? new PointTowardsMenu(this.target)
        : this.target,
    };
  }
}
