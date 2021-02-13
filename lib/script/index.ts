import { Block, Cap, Hat } from "../blocks";

export class Script {
  public readonly capBlock?: Cap;

  constructor(public readonly blocks: Block[], public hat?: Hat) {}

  cap(capBlock: Cap): this {
    (this.capBlock as Cap) = capBlock;

    return this;
  }
}
