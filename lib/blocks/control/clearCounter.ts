import { Opcode } from "../../types";
import { Block } from "../block";

export class ClearCounter extends Block {
  public readonly opcode = Opcode.ClearCounter;
}
