import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class SwitchCostumeTo extends Block {
  public readonly opcode = Opcode.SwitchCostumeTo;

  constructor(
    public costume: PetalsValue
  ) {
    super(); 
  }

  get inputs(): Inputs {
    return {
      COSTUME: this.costume
    };
  }
}
