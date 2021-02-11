export interface IAsset {
  name: string;
  data: Buffer;
  dataFormat: string;
}

export abstract class Asset implements IAsset {
  public name: string;
  public data: Buffer;
  public dataFormat: string;

  constructor(config: IAsset) {
    this.name = config.name;
    this.data = config.data;
    this.dataFormat = config.dataFormat;
  }
}
