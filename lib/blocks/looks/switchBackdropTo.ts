import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class SwitchBackdropTo extends Block {
  public readonly opcode = Opcode.SwitchBackdropTo;

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
