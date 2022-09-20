export class Border_image {
  source: string;
  outset: number = 0;
  repeat: "stretch" | "repeat" | "round" | "space" | "initial" | "inherit" =
    "initial";
  slice: string = "";
  width: number = 0;
  constructor(path: string) {
    this.source = path
  }
}
