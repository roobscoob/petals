import { Opcode } from "../../types";
import { Block } from "../block";

export class Hide extends Block {
  public readonly opcode = Opcode.Hide;
}
