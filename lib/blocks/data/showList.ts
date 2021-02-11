import { Opcode } from "../../types";
import { Block, Fields } from "../block";
import { List } from "./variables";

export class ShowList extends Block {
  public readonly opcode = Opcode.ShowList;

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
