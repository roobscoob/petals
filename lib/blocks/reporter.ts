import { Block } from ".";
import { Opcode } from "../types";
import * as Control from "./control";
import * as Data from "./data";

export abstract class Reporter extends Block {
  static getOpcodes(): { [opcode: Opcode]: Reporter } {
    return {
      /**
       * Control reporter opcodes: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}
       */

      control_get_counter: Control.Counter,

      /**
       * Data reporter opcodes: {@link "https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js"}
       */

      data_variable: Data.Variable,
      data_listcontents: Data.List,
      data_itemoflist: Data.ItemOfList,
      data_itemnumoflist: Data.ItemNumberOfList,
      data_lengthoflist: Data.LengthOfList,
      data_listcontainsitem: Data.ListContainsItem,

      /**
       * Looks reporter opcodes: {@link "https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js"}
       */

      looks_size:
      looks_costumenumbername:
      looks_backdropnumbername:

      /**
       * Motion reporter opcodes: {@link "https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js"}
       */

      motion_xposition:
      motion_yposition:
      motion_direction:
      motion_xscroll:
      motion_yscroll:

      /**
       * Operator reporter opcodes: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_operators.js}
       */

      operator_add: 
      operator_subtract: 
      operator_multiply: 
      operator_divide: 
      operator_lt: 
      operator_equals: 
      operator_gt: 
      operator_and: 
      operator_or: 
      operator_not: 
      operator_random: 
      operator_join: 
      operator_letter_of: 
      operator_length: 
      operator_contains: 
      operator_mod: 
      operator_round: 
      operator_mathop: 

      /**
       * Procedures reporter opcodes: {@link "https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_procedures.js"}
       */

      argument_reporter_string_number:
      argument_reporter_boolean:

      /**
       * Sensing reporter opcodes: {@link "https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js"}
       */

      sensing_touchingobject: 
      sensing_touchingcolor: 
      sensing_coloristouchingcolor: 
      sensing_distanceto: 
      sensing_timer: 
      sensing_of: 
      sensing_mousex: 
      sensing_mousey: 
      sensing_mousedown: 
      sensing_keypressed: 
      sensing_current: 
      sensing_dayssince2000: 
      sensing_loudness: 
      sensing_loud: 
      sensing_answer: 
      sensing_username: 
      sensing_userid: 

      /**
       * Sound reporter opcodes: {@link "https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sound.js"}
       */

      sound_volume: 
    }
  }
}
