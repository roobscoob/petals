import { Opcode } from "../../types";
import { Cap } from "../cap";

export class DeleteThisClone extends Cap {
  public readonly opcode = Opcode.DeleteThisClone;
}
