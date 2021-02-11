import { Opcode } from "../../types";
import { Block } from "../block";

export class ClearEffects extends Block {
  public readonly opcode = Opcode.ClearGraphicEffects;
}
