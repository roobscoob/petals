import { Opcode, PetalsValue } from "../../types";
import { Block, Fields, Inputs } from "../block";
import { FrontBackLevel } from "./goToFrontBack";

export class GoFowardBackLayers extends Block {
  public readonly opcode = Opcode.GoForwardBackwardLayers;

  constructor(
    public frontback: FrontBackLevel,
    public num: PetalsValue,
  ) {
    super();
  }

  get fields(): Fields {
    return {
      FRONT_BACK: this.frontback
    };
  }

  get inputs(): Inputs {
    return {
      NUM: this.num
    };
  }
}
