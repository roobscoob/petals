import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class SwitchBackdropToAndWait extends Block {
  public readonly opcode = Opcode.SwitchBackdropToAndWait;

  constructor(
    public backdrop: PetalsValue
  ) {
    super(); 
  }

  get inputs(): Inputs {
    return {
      BACKDROP: this.backdrop
    };
  }
}
