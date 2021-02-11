import { Script } from "../script";
import { Variable } from "../variables";
import { Broadcast } from "../Broadcast";
import { Costume, Sound } from "../asset";
import { List } from "../variables/list";

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
