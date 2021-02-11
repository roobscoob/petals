import { Block } from ".";
import { Script } from "../script";
import { Opcode } from "../types";
import { WhenStartAsClone } from "./control/WhenStartAsClone";

export abstract class Hat extends Block {
  static getOpcodes(): { [opcode: Opcode]: Hat } {
    return {
      /**
       * Control hat opcodes: {@link "https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js"}
       */

      control_start_as_clone: WhenStartAsClone,

      /**
       * Event hat opcodes: {@link "https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_event.js"}
       */

      event_whenflagclicked:
      event_whenkeypressed:
      event_whenthisspriteclicked:
      event_whentouchingobject:
      event_whenstageclicked:
      event_whenbackdropswitchesto:
      event_whengreaterthan:
      event_whenbroadcastrecieved:

      /**
       * Procedures Hat opcodes: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_procedures.js}
       */

      procedures_definition: 
    }
  }

  do(script: Script) {
    script.blocks.unshift(this);

    return script;
  }
}
