import { Opcode, PetalsValue } from "../../types";
import { Block, Fields, Inputs } from "../block";
import { Variable } from "./variables";

export class SetVariableTo extends Block {
  public readonly opcode = Opcode.SetVariableTo;

  constructor(
    public variable: Variable,
    public value: PetalsValue,
  ) {
    super();
  }

  get fields(): Fields {
    return {
      VARIABLE: this.variable,
    };
  }

  get inputs(): Inputs {
    return {
      VALUE: this.value,
    };
  }
}
