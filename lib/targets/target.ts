import { Script } from "../script";
import { Variable } from "../blocks/data/variables";
import { Broadcast } from "../broadcast";
import { Costume, Sound } from "../asset";
import { List } from "../blocks/data/variables/list";
import { SerializedCostume, SerializedSound } from "../types/serializedAssets";
import JSZip from "jszip";
import { SerializedBlock } from "../types/serializedBlock";

export interface ITargetOptions {
  volume?: number;
  layer?: number;
}

export abstract class Target {
  public broadcasts: Broadcast[] = [];
  public variables: Variable[] = [];
  public costumes: Costume[] = [];
  public scripts: Script[] = [];
  public sounds: Sound[] = [];
  public lists: List[] = [];
  public volume = 100;
  public layer = 0;

  constructor(config: ITargetOptions) {
    // eslint-disable-next-line guard-for-in
    for (const element in config) {
      this[element] = config[element];
    }
  }

  async loadCostumeFromJSON(costume: SerializedCostume, zip: JSZip): Promise<void> {
    const data = await zip.file(costume.md5ext)?.async("nodebuffer");

    if (!data) {
      throw new Error(`Missing asset: ${costume.md5ext}`);
    }

    this.costumes.push(new Costume({
      rotationCenter: [costume.rotationCenterX, costume.rotationCenterY],
      bitmapResolution: costume.bitmapResolution,

      name: costume.name,
      dataFormat: costume.dataFormat,
      data,
    }));
  }

  async loadSoundFromJSON(sound: SerializedSound, zip: JSZip): Promise<void> {
    const data = await zip.file(sound.md5ext)?.async("nodebuffer");

    if (!data) {
      throw new Error(`Missing asset: ${sound.md5ext}`);
    }

    this.sounds.push(new Sound({
      rate: sound.rate,
      sampleCount: sound.sampleCount,

      name: sound.name,
      dataFormat: sound.dataFormat,

      data,
    }));
  }

  linkScripts(blocks: { [id: string]: SerializedBlock }): Script[] {
    const heads = Object.values(blocks).filter(block => block.topLevel);

    const serializedScripts: SerializedBlock[][] = [];

    for (let i = 0; i < heads.length; i++) {
      const head = heads[i];

      serializedScripts[i] = [head];

      let current = head;

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      while (current.next && blocks[current.next]) {
        current = blocks[current.next];

        serializedScripts[i].push(current);
      }
    }

    for (let i = 0; i < serializedScripts.length; i++) {
      const script = serializedScripts[i];

      for (let j = 0; j < script.length; j++) {
        const blockJSON = script[j];

        console.log(blockJSON);
      }
    }

    return [];
  }
}
