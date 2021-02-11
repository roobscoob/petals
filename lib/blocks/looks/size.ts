import { Opcode } from "../../types";
import { Reporter } from "../reporter";

export class Size extends Reporter {
  public readonly opcode = Opcode.Size;
}
