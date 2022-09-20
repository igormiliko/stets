import { ColorPallete } from "../../../../config/ColorPallete";

export class Border {
  width: number = 0;
  radius: number = 0;
  color: ColorPallete["colors"] | "" = "";
  style:
    | "dotted"
    | "dashed"
    | "solid"
    | "double"
    | "groove"
    | "ridge"
    | "inset"
    | "outset"
    | "none"
    | "hidden" = "inset";

  setWidth(w: number) {
    this.width = w;
  }
  setRadius(r: number) {
    this.radius = r;
  }
  setColor(c: ColorPallete["colors"]) {
    this.color = c;
  }
  setStyle(s: Border["style"]) {
    this.style = s;
  }
}
