import { Asset, IAsset as IAssetConfig } from "./asset";

export interface ICostumeConfig extends IAssetConfig {
  rotationCenter: [x: number, y: number];
  bitmapResolution?: number;
}

export class Costume extends Asset implements IAssetConfig {
  public rotationCenter: [x: number, y: number];
  public bitmapResolution?: number;

  constructor(config: ICostumeConfig) {
    super(config);

    this.rotationCenter = config.rotationCenter;
    this.bitmapResolution = config.bitmapResolution;
  }
}
