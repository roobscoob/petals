import { Opcode } from "../../types";
import { Block } from "../block";

export class YScroll extends Block {
  public readonly opcode = Opcode.YScroll;
}
