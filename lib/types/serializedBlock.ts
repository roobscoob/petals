import { Opcode } from ".";

export interface SerializedInput {
  a: 1;
}

export interface SerializedField {
  a: 1;
}

export interface SerializedBlock {
  opcode: Opcode;
  next?: string;
  parent?: string;
  inputs: { [ id: string ]: SerializedInput };
  fields: { [ id: string ]: SerializedField };
  shadow: boolean;
  topLevel: boolean;
  x?: number;
  y?: number;
}
