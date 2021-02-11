import { Opcode } from "../../types";
import { Block } from "../block";

export class IncrementCounter extends Block {
  public readonly opcode = Opcode.IncrementCounter;
}
