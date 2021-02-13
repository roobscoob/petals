import { Opcode } from "../../types";
import { Block } from "../block";

export class IfOnEdgeBounce extends Block {
  public readonly opcode = Opcode.IfOnEdgeBounce;
}
