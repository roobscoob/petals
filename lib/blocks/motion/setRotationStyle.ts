import { Opcode } from "../../types";
import { RotationStyle } from "../../types/serializedTarget";
import { Block, Fields } from "../block";

export class SetRotationStyle extends Block {
  public readonly opcode = Opcode.SetRotationStyle;

  constructor(
    public style: RotationStyle
  ) {
    super();
  }

  get fields(): Fields {
    return {
      STYLE: this.style
    }
  }
}
