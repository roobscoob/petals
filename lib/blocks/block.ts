import { Opcode, PetalsValue } from "../types";
import { Script } from "../script";
import { List, Variable } from "./data/variables";
import * as Control from "./control";
import * as Data from "./data";

export type Fields = {
  [key: string]: string | Variable | List;
}

export type Inputs = {
  [key: string]: PetalsValue | Script;
}

export abstract class Block {
  public abstract readonly opcode: Opcode;

  public readonly next?: Block;
  public readonly parent?: Block;

  public get inputs(): Inputs {
    return {};
  };

  public get fields(): Fields {
    return {};
  };

  static getOpcodes(): { [opcode: Opcode]: Block } {
    return {
      /**
       * Control Stack opcodes: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_control.js}
       */

      control_repeat: Control.Repeat,
      control_repeat_until: Control.RepeatUntil,
      control_while: Control.While,
      control_for_each: Control.ForEach,
      control_forever: Control.Forever,
      control_wait: Control.Wait,
      control_wait_until: Control.WaitUntil,
      control_if: Control.If,
      control_if_else: Control.IfElse,
      control_stop: Control.Stop,
      control_create_clone_of: Control.CreateCloneOf,
      control_delete_this_clone: Control.DeleteThisClone,
      control_incr_counter: Control.IncrementCounter,
      control_clear_counter: Control.ClearCounter,
      control_all_at_once: Control.AllAtOnce,

      /**
       * Data Stack opcodes {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_data.js}
       */

      data_setvariableto: Data.SetVariableTo,
      data_changevariableby: Data.IncrementVariableBy,
      data_hidevariable: Data.HideVariable,
      data_showvariable: Data.ShowVariable,
      data_addtolist: Data.AddToList, 
      data_deleteoflist: Data.DeleteAtList,
      data_deletealloflist: Data.DeleteAllOfList,
      data_insertatlist: Data.InsertAtList,
      data_replaceitemoflist: Data.ReplaceItemOfList,
      data_hidelist: Data.HideList,
      data_showlist: Data.ShowList,

      /**
       * Event Stack opcodes {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_event.js}
       */

      event_broadcast:
      event_broadcastandwait:

      /**
       * Looks Stack opcodes {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_looks.js}
       */

      looks_say:
      looks_sayforsecs:
      looks_think:
      looks_thinkforsecs:
      looks_show:
      looks_hide:
      looks_hideallsprites:
      looks_switchcostumeto:
      looks_switchbackdropto:
      looks_switchbackdroptoandwait:
      looks_nextcostume:
      looks_nextbackdrop:
      looks_changeeffectby:
      looks_seteffectto:
      looks_cleargraphiceffects:
      looks_changesizeby:
      looks_setsizeto:
      looks_changestretchby:
      looks_setstretchto:
      looks_gotofrontback:
      looks_goforwardbackwardlayers:

      /**
       * Motion Stack opcodes: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_motion.js}
       */

      motion_movesteps:
      motion_gotoxy:
      motion_goto:
      motion_turnright:
      motion_turnleft:
      motion_pointindirection:
      motion_pointtowards:
      motion_glidesecstoxy:
      motion_glideto:
      motion_ifonedgebounce:
      motion_setrotationstyle:
      motion_changexby:
      motion_setx:
      motion_changeyby:
      motion_sety:

      /**
       * Procedures Stack opcodes: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_procedures.js}
       */

      procedures_call:

      /**
       * Sensing Stack opcodes: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sensing.js}
       */

      sensing_resettimer:
      sensing_setdragmode:
      sensing_askandwait:

      /**
       * Sound Stack opcodes: {@link https://github.com/LLK/scratch-vm/blob/develop/src/blocks/scratch3_sound.js}
       */

      sound_play: 
      sound_playuntildone: 
      sound_stopallsounds: 
      sound_seteffectto: 
      sound_changeeffectby: 
      sound_cleareffects: 
      sound_setvolumeto: 
      sound_changevolumeby: 
    }
  }
}

export abstract class WrapBlock extends Block {
  public readonly bodies: Script[];
  private bodyCount = 0;

  constructor(private readonly maxBodies: number) {
    super();

    this.bodies = new Array(maxBodies);
  }

  addBody(script: Script): this {
    //TODO: Better error
    if (this.bodyCount >= this.maxBodies) throw new Error("Too many bodies!")

    this.bodies[this.bodyCount] = script;
    this.bodyCount++;

    return this;
  }
}
