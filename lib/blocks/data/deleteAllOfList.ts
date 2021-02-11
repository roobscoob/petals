import { Opcode } from "../../types";
import { Block, Fields } from "../block";
import { List } from "./variables";

export class DeleteAllOfList extends Block {
  public readonly opcode = Opcode.DeleteAllOfList;

  constructor(
    public list: List,
  ) {
    super();
  }

  get fields(): Fields {
    return {
      LIST: this.list,
    };
  }
}
