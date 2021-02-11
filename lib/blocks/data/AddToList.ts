import { Opcode, PetalsValue } from "../../types";
import { Block, Fields, Inputs } from "../block";
import { List } from "./variables";

export class AddToList extends Block {
  public readonly opcode = Opcode.AddToList;

  constructor(
    public list: List,
    public item: PetalsValue,
  ) {
    super();
  }

  get fields(): Fields {
    return {
      LIST: this.list,
    };
  }

  get inputs(): Inputs {
    return {
      ITEM: this.item,
    };
  }
}
