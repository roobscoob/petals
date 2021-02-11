import { Opcode, PetalsValue } from "../../types";
import { Block, Fields, Inputs } from "../block";

export enum ForwardBackwardLevel {
  Forward = "forward",
  Backward = "backward"
}

export class GoFowardBackwardLayers extends Block {
  public readonly opcode = Opcode.GoForwardBackwardLayers;

  constructor(
    public forwardbackward: ForwardBackwardLevel,
    public num: PetalsValue,
  ) {
    super();
  }

  get fields(): Fields {
    return {
      FORWARD_BACKWARD: this.forwardbackward
    };
  }

  get inputs(): Inputs {
    return {
      NUM: this.num
    };
  }
}
