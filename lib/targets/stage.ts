import { Language, SerializedStage, VideoState } from "../types/serializedTarget";
import { ITargetOptions, Target } from "./target";
import JSZip from "jszip";
import { Broadcast } from "../broadcast";

export interface IStageOptions extends ITargetOptions {
  tempo?: number;
  textToSpeechLanguage?: Language;
  videoState?: VideoState;
  videoTransparency?: number;
}

export class Stage extends Target implements IStageOptions {
  public tempo = 60;
  public textToSpeechLanguage: Language = Language.English;
  public videoState: VideoState = VideoState.Off;
  public videoTransparency = 100;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(config: IStageOptions) {
    super(config);
  }

  static async fromJSON(stageObject: SerializedStage, zip: JSZip): Promise<Stage> {
    const stage = new Stage({
      // stage options:
      tempo: stageObject.tempo,
      textToSpeechLanguage: stageObject.textToSpeechLanguage,
      videoState: stageObject.videoState,
      videoTransparency: stageObject.videoTransparency,

      //base options:
      layer: stageObject.layerOrder,
      volume: stageObject.volume,
    });

    await Promise.all(stageObject.costumes.map(async el => await stage.loadCostumeFromJSON(el, zip)));
    await Promise.all(stageObject.sounds.map(async el => await stage.loadSoundFromJSON(el, zip)));

    stage.broadcasts = Object.values(stageObject.broadcasts).map(name => new Broadcast(name));

    stage.linkScripts(stageObject.blocks);

    return stage;
  }
}
