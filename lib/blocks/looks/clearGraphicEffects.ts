import { Opcode } from "../../types";
import { Block } from "../block";

export class ClearGraphicEffects extends Block {
  public readonly opcode = Opcode.ClearGraphicEffects;
}
