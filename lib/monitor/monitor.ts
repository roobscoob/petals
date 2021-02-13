import { Reporter } from "../blocks/reporter";
import { Sprite } from "../targets/Sprite";

export enum MonitorMode {
  Default = "default",
  Large = "large",
  Slider = "slider",
  List = "list",
}

export interface MonitorInfo {
  mode: MonitorMode;
  value: string | number;
  width: number;
  height: number;
  x: number;
  y: number;
  visible: boolean;
  min: number;
  max: number;
  descrete: boolean;
}

export class Monitor implements MonitorInfo {
  public mode: MonitorMode;
  public value: string | number;
  public width: number;
  public height: number;
  public x: number;
  public y: number;
  public visible: boolean;
  public min: number;
  public max: number;
  public descrete: boolean;

  constructor(
    public readonly reporter: Reporter,
    public info: MonitorInfo,
    public sprite?: Sprite,
  ) {
    this.mode = info.mode;
    this.value = info.value;
    this.width = info.width;
    this.height = info.height;
    this.x = info.x;
    this.y = info.y;
    this.visible = info.visible;
    this.min = info.min;
    this.max = info.max;
    this.descrete = info.descrete;
  }
}
