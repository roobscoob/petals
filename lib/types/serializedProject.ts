import { Monitor } from "../monitor/monitor";
import { SerializedTarget } from "./serializedTarget";

export enum Extension {
  Music = "music",
  VideoSensing = "videoSensing",
  Pen = "pen",
  Text2Speech = "text2speech",
  Translate = "translate",
  MakeyMakey = "makeymakey",
  MicroBit = "microbit",
  EV3 = "ev3",
  Boost = "boost",
  WeDo2 = "wedo2",
  ForceAndAcceleration = "gdxfor",
}

export interface SerializedProject {
  targets: SerializedTarget[];
  monitors: Monitor[];
  extensions: Extension[];
  meta: {
    semver: string;
    vm: string;
    agent: string;
  };
}
