import { ItemOfList, ReplaceItemOfList, ItemNumberOfList, LengthOfList, ListContainsItem, AddToList, DeleteAllOfList, DeleteAtList, InsertAtList } from "..";
import { Reporter } from "../..";
import { Opcode, PetalsValue } from "../../../types";

export class List extends Reporter {
  public readonly opcode = Opcode.ListContents;

  constructor(
    public readonly name: string,
    public initialValue: (string | number)[],
  ) {
    super();
  }

  get(i: PetalsValue): ItemOfList {
    return new ItemOfList(this, i);
  }

  replace(i: PetalsValue, v: PetalsValue): ReplaceItemOfList {
    return new ReplaceItemOfList(this, i, v);
  }

  find(v: PetalsValue): ItemNumberOfList {
    return new ItemNumberOfList(this, v);
  }

  getLength(): LengthOfList {
    return new LengthOfList(this);
  }

  has(v: PetalsValue): ListContainsItem {
    return new ListContainsItem(this, v);
  }

  clear(): DeleteAllOfList {
    return new DeleteAllOfList(this);
  }

  delete(i: PetalsValue): DeleteAtList {
    return new DeleteAtList(this, i);
  }

  insert(v: PetalsValue, i: PetalsValue): InsertAtList {
    return new InsertAtList(this, v, i);
  }

  push(v: PetalsValue): AddToList {
    return new AddToList(this, v);
  }
}
