import { Reporter } from "../blocks/reporter";
import { Sprite } from "../targets/Sprite";

export enum MonitorMode {
  Default = "default",
  Large = "large",
  Slider = "slider",
  List = "list",
}

export interface MonitorSlider {
  min: number;
  max: number;
  descrete: boolean;
}

export class Monitor {
  public mode: MonitorMode;
  public value: string | number;
  public width: number;
  public height: number;
  public x: number;
  public y: number;
  public visible: boolean;
  public slider: MonitorSlider;
  public sprite?: Sprite;

  constructor(
    public readonly reporter: Reporter,
    public mode: MonitorMode,
    public sprite?: Sprite,
  ) {}
}
