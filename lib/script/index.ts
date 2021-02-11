import { Block, Cap } from "../blocks";

export class Script {
  constructor(public readonly blocks: Block[]) {}

  static cap(capBlock: Cap): Script {
    return new Script([]).cap(capBlock);
  }

  cap(capBlock: Cap): this {
    this.blocks.push(capBlock);

    return this;
  }
}
