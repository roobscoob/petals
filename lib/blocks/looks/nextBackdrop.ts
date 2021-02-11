import { Opcode } from "../../types";
import { Block } from "../block";

export class NextBackdrop extends Block {
  public readonly opcode = Opcode.NextBackdrop;
}
