import { Opcode } from "../../types";
import { Block } from "../block";

export class Show extends Block {
  public readonly opcode = Opcode.Show;
}
