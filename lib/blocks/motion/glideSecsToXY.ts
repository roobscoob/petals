import { Opcode } from "../../types";
import { Block } from "../block";

export class GlideSecsToXY extends Block {
  public readonly opcode = Opcode.GlideSecondsToXY;
}
