import { Opcode } from "../../types";
import { Block, Fields } from "../block";

export enum CostumeNumberNameOption {
    Number = "number",
    name = "name"
}

export class CostumeNumberName extends Block {
  public readonly opcode = Opcode.CostumeNumberName;

  constructor(
    public numbername: CostumeNumberNameOption
  ) {
    super(); 
  }

  get fields(): Fields {
    return {
      NUMBER_NAME: this.numbername
    };
  }
}
