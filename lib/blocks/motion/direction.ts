import { Opcode } from "../../types";
import { Block } from "../block";

export class Direction extends Block {
  public readonly opcode = Opcode.Direction;
}
