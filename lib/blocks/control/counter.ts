import { Opcode } from "../../types";
import { Reporter } from "../reporter";

export class Counter extends Reporter {
  public readonly opcode = Opcode.GetCounter;
}
