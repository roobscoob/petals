import { Opcode, PetalsValue } from "../../types";
import { Block, Inputs } from "../block";

export class LetterOf extends Block {
  public readonly opcode = Opcode.LetterOf;

  constructor(
    public letter: PetalsValue,
    public string: PetalsValue,
  ) {
    super();
  }

  get inputs(): Inputs {
    return {
      LETTER: this.letter,
      STRING: this.string,
    }
  }
}
