import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class GoToXY extends Block {
  public readonly opcode = Opcode.GotoXY;

  constructor(
    public x: PetalsValue,
    public y: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      X: this.x,
      Y: this.y,
    };
  }
}
