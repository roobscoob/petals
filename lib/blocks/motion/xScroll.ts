import { Opcode } from "../../types";
import { Block } from "../block";

export class XScroll extends Block {
  public readonly opcode = Opcode.XScroll;
}
