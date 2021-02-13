import { Costume } from "../../asset";
import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";
import { SwitchBackdropToMenu } from "./switchBackdropTo";

export class SwitchBackdropToAndWait extends Block {
  public readonly opcode = Opcode.SwitchBackdropToAndWait;

  constructor(
    public backdrop: Costume | PetalsValue,
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
