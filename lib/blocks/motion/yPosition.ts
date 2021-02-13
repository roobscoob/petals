import { Opcode } from "../../types";
import { Block } from "../block";

export class YPosition extends Block {
  public readonly opcode = Opcode.YPosition;
}
