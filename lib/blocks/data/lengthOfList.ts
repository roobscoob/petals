import { Opcode } from "../../types";
import { Fields } from "../block";
import { Reporter } from "../reporter";
import { List } from "./variables";

export class LengthOfList extends Reporter {
  public readonly opcode = Opcode.LengthOfList;

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
