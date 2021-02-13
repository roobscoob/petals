import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class MoveSteps extends Block {
  public readonly opcode = Opcode.MoveSteps;

  constructor(
    public steps: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      STEPS: this.steps,
    };
  }
}
