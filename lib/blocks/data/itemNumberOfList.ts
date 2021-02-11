import { Opcode, PetalsValue } from "../../types";
import { Fields, Inputs } from "../block";
import { Reporter } from "../reporter";
import { List } from "./variables";

export class ItemNumberOfList extends Reporter {
  public readonly opcode = Opcode.ItemNumberOfList;

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
