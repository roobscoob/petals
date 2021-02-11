import { Script } from "../script";
import { Variable } from "../blocks/data/variables";
import { Broadcast } from "../broadcast";
import { Costume, Sound } from "../asset";
import { List } from "../blocks/data/variables/list";

export abstract class Target {
  public broadcasts: Broadcast[] = [];
  public variables: Variable[] = [];
  public costumes: Costume[] = [];
  public scripts: Script[] = [];
  public sounds: Sound[] = [];
  public lists: List[] = [];
  public volume = 100;
  public layer = 0;

  constructor(
    public readonly name: string,
  ) {}
}
