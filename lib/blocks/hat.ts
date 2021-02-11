import { Block } from ".";
import { Opcode } from "../types";

export abstract class Hat extends Block {
  static getOpcodes(): { [opcode: Opcode]: Hat } {
    return {
      /**
       * Control hat opcodes: {@link "https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js"}
       */

      control_start_as_clone:

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
}
