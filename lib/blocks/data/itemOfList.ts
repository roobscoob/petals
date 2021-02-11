import { Opcode, PetalsValue } from "../../types";
import { Fields, Inputs } from "../block";
import { Reporter } from "../reporter";
import { List } from "./variables";

export class ItemOfList extends Reporter {
  public readonly opcode = Opcode.ItemOfList;

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
