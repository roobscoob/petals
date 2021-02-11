import { Opcode } from "../../types";
import { Block, Fields } from "../block";

export enum BackdropNumberNameOption {
    Number = "number",
    name = "name"
}

export class BackdropNumberName extends Block {
  public readonly opcode = Opcode.BackdropNumberName;

  constructor(
    public numbername: BackdropNumberNameOption
  ) {
    super(); 
  }

  get fields(): Fields {
    return {
      NUMBER_NAME: this.numbername
    };
  }
}
