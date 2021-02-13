import { SerializedCostume, SerializedSound } from "./serializedAssets";
import { SerializedBlock } from "./serializedBlock";

export enum RotationStyle {
  AllAround = "all around",
  DontRotate = "don't rotate",
  LeftRight = "left-right",
}

export enum Language {
  Arabic = "ar",
  ChineseMandarin = "zh-cn",
  Danish = "da",
  Dutch = "nl",
  English = "en",
  French = "fr",
  German = "de",
  Hindi = "hi",
  Icelandic = "is",
  Italian = "it",
  Japanese = "ja",
  Korean = "ko",
  Norwegian = "nb",
  Polish = "pl",
  PortugueseBrazilian = "pt-br",
  Portuguese = "pt",
  Romanian = "ro",
  Russian = "ru",
  Spanish = "es",
  SpanishLatinAmerican = "es-419",
  Swedish = "sv",
  Turkish = "tr",
  Welsh = "cy",
}

export enum VideoState {
  On = "on",
  Off = "off",
  Flipped = "on-flipped",
}

export interface SerializedTargetBase {
  blocks: { [id: string]: SerializedBlock };
  broadcasts: { [id: string]: string };
  //comments...
  costumes: SerializedCostume[];
  currentCostume: number;
  isStage: boolean;
  layerOrder: number;
  //lists...
  name: string;
  sounds: SerializedSound[];
  //variables...
  volume: number;
}

export interface SerializedStage extends SerializedTargetBase {
  isStage: true;
  tempo: number;
  textToSpeechLanguage: Language;
  videoState: VideoState;
  videoTransparency: number;
}

export interface SerializedSprite extends SerializedTargetBase {
  isStage: false;
  direction: number;
  draggable: boolean;
  rotationStyle: RotationStyle;
  size: number;
  visible: boolean;
  x: number;
  y: number;
}

export type SerializedTarget = SerializedStage | SerializedSprite;
