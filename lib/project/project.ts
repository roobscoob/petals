import { ProjectMetadata } from "./metadata";
import fs from "fs";
import JSZip from "jszip";
import { SerializedProject } from "../types/serializedProject";
import { Stage } from "../targets/stage";
import { SerializedStage } from "../types/serializedTarget";

export class Project {
  public readonly metadata: ProjectMetadata;

  constructor(userAgent: string = "PetalsTS", scratchVersion: [number, number, number] = [3, 0, 0], vm: string = "PetalsTS-development") {
    this.metadata = { userAgent, scratchVersion, vm };
  }

  static async parseSB3(input: string | Buffer): Promise<Project> {
    if (typeof input === "string") {
      input = fs.readFileSync(input);
    }

    const zip = await JSZip.loadAsync(input);

    const projectJSONReference = zip.file("project.json");

    if (!projectJSONReference) {
      throw new Error("SB3 File Invalid! Missing `project.json`");
    }

    const projectObject = JSON.parse(await projectJSONReference.async("string")) as SerializedProject;
    const project = new Project(projectObject.meta.agent, projectObject.meta.semver.split(".").map(el => parseInt(el, 10)) as [number, number, number], projectObject.meta.vm);
    const stageObject = projectObject.targets.find(target => target.isStage) as SerializedStage | undefined;
    // const spriteObjects = projectObject.targets.filter(target => !target.isStage) as SerializedSprite[];

    if (!stageObject) {
      throw new Error("Project JSON has no target that is a stage.");
    }

    const stage = Stage.fromJSON(stageObject, zip);

    console.log(stage);

    return project;
  }
}

Project.parseSB3("test.sb3");
