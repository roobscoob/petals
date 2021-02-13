import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class Random extends Block {
  public readonly opcode = Opcode.Random;

  constructor(
    public from: PetalsValue,
    public to: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      FROM: this.from,
      TO: this.to,
    }
  }
}
