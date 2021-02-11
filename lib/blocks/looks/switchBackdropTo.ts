import { Costume } from "../../asset";
import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";
import { Reporter } from "../reporter";

export class SwitchBackdropToMenu extends Reporter {
  public readonly opcode = Opcode.SwitchCostumeToMenu;

  constructor(
    public readonly backdrop: Costume
  ) {
    super();
  }

  get fields() {
    return {
      BACKDROP_OPTION: this.backdrop.name
    };
  }
}

export class SwitchBackdropTo extends Block {
  public readonly opcode = Opcode.SwitchBackdropTo;

  constructor(
    public backdrop: PetalsValue
  ) {
    super(); 
  }

  get inputs(): Inputs {
    return {
      BACKDROP: this.backdrop instanceof Costume
        ? new SwitchBackdropToMenu(this.backdrop)
        : this.backdrop,
    };
  }
}
