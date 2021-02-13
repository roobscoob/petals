import { Opcode } from "../../types";
import { Block, Fields } from "../block";

export enum FrontBackLevel {
  Front = "front",
  Back = "back",
}

export class GoToFrontBack extends Block {
  public readonly opcode = Opcode.GoToFrontBack;

  constructor(
    public frontback: FrontBackLevel,
  ) {
    super();
  }

  get fields(): Fields {
    return {
      FRONT_BACK: this.frontback,
    };
  }
}
