import { Opcode } from "../../types";
import { Block, Fields } from "../block";
import { CostumeNumberNameOption } from "./costumeNumberName";

export class BackdropNumberName extends Block {
  public readonly opcode = Opcode.BackdropNumberName;

  constructor(
    public numbername: CostumeNumberNameOption,
  ) {
    super();
  }

  get fields(): Fields {
    return {
      NUMBER_NAME: this.numbername,
    };
  }
}
