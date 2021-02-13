import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class PointInDirection extends Block {
  public readonly opcode = Opcode.PointInDirection;

  constructor(
    public direction: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      DIRECTION: this.direction,
    };
  }
}
