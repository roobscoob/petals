import { RotationStyle } from "../types/serializedTarget";
import { ITargetOptions, Target } from "./target";

export interface ISpriteOptions extends ITargetOptions {
  x?: number;
  y?: number;
  visible?: boolean;
  size?: number;
  rotationStyle?: RotationStyle;
  draggable?: boolean;
  direction?: number;
  name: string;
}

export class Sprite extends Target implements ISpriteOptions {
  public x = 0;
  public y = 0;
  public visible = true;
  public size = 100;
  public rotationStyle = RotationStyle.AllAround;
  public draggable = false;
  public direction = 90;
  public name: string;

  constructor(nameOrConfig: string | ISpriteOptions) {
    super(typeof nameOrConfig === "string" ? { } : nameOrConfig);

    if (typeof nameOrConfig === "string") {
      this.name = nameOrConfig;
    } else {
      this.name = nameOrConfig.name;
    }
  }
}
