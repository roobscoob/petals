import { Costume } from "../../asset";
import { Opcode, PetalsValue } from "../../types";
import { Block, Fields, Inputs } from "../block";
import { Reporter } from "../reporter";

export class SwitchCostumeToMenu extends Reporter {
  public readonly opcode = Opcode.SwitchCostumeToMenu;

  constructor(
    public readonly costume: Costume,
  ) {
    super();
  }

  get fields(): Fields {
    return {
      COSTUME_OPTION: this.costume.name,
    };
  }
}

export class SwitchCostumeTo extends Block {
  public readonly opcode = Opcode.SwitchCostumeTo;

  constructor(
    public costume: Costume | PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      COSTUME: this.costume instanceof Costume
        ? new SwitchCostumeToMenu(this.costume)
        : this.costume,
    };
  }
}
