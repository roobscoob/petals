import { Opcode } from "../../types";
import { Block, Fields } from "../block";
import { List } from "./variables";

export class HideList extends Block {
  public readonly opcode = Opcode.HideList;

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
