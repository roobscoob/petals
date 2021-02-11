import { Opcode, PetalsValue } from "../../types";
import { Block, Fields, Inputs } from "../block";
import { List } from "./variables";

export class InsertAtList extends Block {
  public readonly opcode = Opcode.InsertAtList;

  constructor(
    public list: List,
    public item: PetalsValue,
    public index: PetalsValue,
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
      INDEX: this.index,
    };
  }
}
