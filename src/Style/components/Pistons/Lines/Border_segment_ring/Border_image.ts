import { ColorPallete } from "../../../../config/ColorPallete";
export class Border_image {
  source: TBorder_image_source = "none";
  outset: TBorder_image_outset = "initial";
  repeat: TBorder_image_repeat = "initial";
  slice: TBorder_image_slice = 0;
  width: TBorder_image_width = 0;
  constructor(path: TBorder_image_source) {
    this.source = path;
  }
}
