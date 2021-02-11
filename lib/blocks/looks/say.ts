import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class Say extends Block {
  public readonly opcode = Opcode.Say;

  constructor(
    public message: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      MESSAGE: this.message
    };
  }
}
