import { Opcode } from "../../types";
import { Block } from "../block";

export class XPosition extends Block {
  public readonly opcode = Opcode.XPosition;
}
