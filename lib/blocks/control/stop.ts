import { Opcode } from "../../types";
import { Block, Fields } from "../block";

export enum StopBlockOption {
  All = "all",
  ThisScript = "this script",
  OtherScripts = "other scripts in sprite",
}

export class Stop extends Block {
  public readonly opcode = Opcode.Stop;

  constructor(
    public option: StopBlockOption,
  ) {
    super();
  }

  get fields(): Fields {
    return {
      STOP_OPTION: this.option,
    };
  }
}
