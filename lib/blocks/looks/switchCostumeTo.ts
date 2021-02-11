import { Costume } from "../../asset";
import { Script } from "../../script";
import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";
import { Reporter } from "../reporter";

export class SwitchCostumeToMenu extends Reporter {
  public readonly opcode = Opcode.SwitchCostumeToMenu;

  constructor(
    public readonly costume: Costume
  ) {
    super();
  }

  get fields() {
    return {
      COSTUME_OPTION: this.costume.name
    };
  }
}

export class SwitchCostumeTo extends Block {
  public readonly opcode = Opcode.SwitchCostumeTo;

  constructor(
    public costume: Costume | PetalsValue
  ) {
    super(); 
  }

  get inputs(): Inputs {
    return {
      COSTUME: this.costume instanceof Costume
        ? new Script([new SwitchCostumeToMenu(this.costume)])
        : this.costume,
    };
  }
}
