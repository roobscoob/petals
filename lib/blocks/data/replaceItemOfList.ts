import { Opcode, PetalsValue } from "../../types";
import { Block, Fields, Inputs } from "../block";
import { List } from "./variables";

export class ReplaceItemOfList extends Block {
  public readonly opcode = Opcode.ReplaceItemOfList;

  constructor(
    public list: List,
    public index: PetalsValue,
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
      INDEX: this.index,
      ITEM: this.item,
    };
  }
}
