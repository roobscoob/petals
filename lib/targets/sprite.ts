import { Target } from "./target";

export enum RotationStyle {
  LeftRight = "left-right",
  DontRotate = "don't rotate",
  AllAround = "all around",
}

export interface ISpriteOptions {
  name: string;
  x?: number;
  y?: number;
  visible?: boolean;
  size?: number;
  rotationStyle?: RotationStyle;
  draggable?: boolean;
  direction?: number;
}

export class Sprite extends Target implements ISpriteOptions {
  public x = 0;
  public y = 0;
  public visible = true;
  public size = 100;
  public rotationStyle = RotationStyle.AllAround;
  public draggable = false;
  public direction = 90;

  constructor(
    public readonly nameOrConfig: string | ISpriteOptions,
  ) {
    super(typeof nameOrConfig === "string" ? nameOrConfig : nameOrConfig.name);

    if (typeof nameOrConfig !== "string") {
      // eslint-disable-next-line guard-for-in
      for (const element in nameOrConfig) {
        this[element] = nameOrConfig[element];
      }
    }
  }
}
