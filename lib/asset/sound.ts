import { Asset, IAsset as IAssetConfig } from "./asset";

export interface ISoundConfig extends IAssetConfig {
  rate: number;
  sampleCount: number;
}

export class Sound extends Asset implements IAssetConfig {
  public rate: number;
  public sampleCount: number;

  constructor(config: ISoundConfig) {
    super(config);

    this.rate = config.rate;
    this.sampleCount = config.sampleCount;
  }
}
