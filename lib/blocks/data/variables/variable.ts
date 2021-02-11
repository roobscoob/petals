import { Reporter } from "../..";
import { Opcode, PetalsValue } from "../../../types";
import { SetVariableTo } from "..";
import { IncrementVariableBy } from "../incrementVariableBy";
import { HideVariable } from "../hideVariable";
import { ShowVariable } from "../showVariable";

export class Variable extends Reporter {
  public opcode = Opcode.Variable;

  constructor(
    public readonly name: string,
    public initialValue: string | number = 0,
  ) {
    super();
  }

  set(v: PetalsValue): SetVariableTo {
    return new SetVariableTo(this, v);
  }

  increment(v: PetalsValue): IncrementVariableBy {
    return new IncrementVariableBy(this, v);
  }

  hide(): HideVariable {
    return new HideVariable(this);
  }

  show(): ShowVariable {
    return new ShowVariable(this);
  }
}
