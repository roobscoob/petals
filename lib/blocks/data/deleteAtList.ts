import { Opcode, PetalsValue } from "../../types";
import { Block, Fields, Inputs } from "../block";
import { List } from "./variables";

export class DeleteAtList extends Block {
  public readonly opcode = Opcode.DeleteOfList;

  constructor(
    public list: List,
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
      INDEX: this.index,
    };
  }
}
