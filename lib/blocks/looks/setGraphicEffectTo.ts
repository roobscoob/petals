import { Opcode, PetalsValue } from "../../types";
import { Block, Fields, Inputs } from "../block";

export enum EffectOption {
    Color = "color",
    Fisheye = "fisheye",
    Whirl = "whirl",
    Pixelate = "pixelate",
    Mosaic = "mosaic",
    Brightness = "brightness",
    Ghost = "ghost"
}

export class SetGraphicEffectTo extends Block {
  public readonly opcode = Opcode.SetGraphicEffectTo;

  constructor(
    public effect: EffectOption,
    public value: PetalsValue
  ) {
    super(); 
  }

  get fields(): Fields {
    return {
      EFFECT: this.effect
    };
  }

  get inputs(): Inputs {
    return {
      VALUE: this.value
    };
  }
}
