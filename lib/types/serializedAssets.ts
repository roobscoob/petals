export interface SerializedAsset {
  name: string;
  md5ext: string;
  dataFormat: string;
}

export interface SerializedCostume extends SerializedAsset {
  rotationCenterX: number;
  rotationCenterY: number;
  bitmapResolution?: number;
}

export interface SerializedSound extends SerializedAsset {
  rate: number;
  sampleCount: number;
}
