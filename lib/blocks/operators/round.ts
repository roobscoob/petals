import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class Round extends Block {
  public readonly opcode = Opcode.Round;

  constructor(
    public num: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      NUM: this.num,
    }
  }
}
