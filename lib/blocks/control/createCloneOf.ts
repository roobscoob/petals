import { PetalsValue, Opcode } from "../../types";
import { Inputs, Block, Fields } from "../block";
import { Reporter } from "../reporter";
import { Sprite } from "../../targets/sprite";
import { Script } from "../../script";

/**
 * @internal
 */
export class CreateCloneOfMenu extends Reporter {
  public readonly opcode = Opcode.CreateCloneOfMenu;
  constructor(
    public readonly sprite: Sprite,
  ) {
    super();
  }

  get fields(): Fields {
    return {
      CLONE_OPTION: this.sprite.name,
    };
  }
}

export class CreateCloneOf extends Block {
  public readonly opcode = Opcode.CreateCloneOf;

  constructor(
    public readonly sprite: Sprite | PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      CLONE_OPTION: this.sprite instanceof Sprite
        ? new Script([new CreateCloneOfMenu(this.sprite)])
        : this.sprite,
    };
  }
}
