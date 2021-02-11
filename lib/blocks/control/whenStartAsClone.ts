import { Opcode } from "../../types";
import { Hat } from "../hat";

export class WhenStartAsClone extends Hat {
  public readonly opcode = Opcode.StartAsClone;
}
