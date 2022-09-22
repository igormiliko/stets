import { ColorPallete } from "../../../../config/ColorPallete";

export type TBorder_image_source =
  | {
      colors: [keyof ColorPallete["colors"], number?][];
      to?: [TDirections, TDirections?];
      repeat?: boolean;
      deg?: number;
    }
  | {
      URL: string | null;
    }
  | TGlobal_CSS_values
  | "none";

export interface IBorder_image {
  source: TBorder_image_source;
  outset: TBorder_image_outset;
  repeat: TBorder_image_repeat;
  slice: TBorder_image_slice;
  width: TBorder_image_width;
}

export class Border_image implements IBorder_image{
  source: TBorder_image_source = "none";
  outset: TBorder_image_outset = "initial";
  repeat: TBorder_image_repeat = "initial";
  slice: TBorder_image_slice = 0;
  width: TBorder_image_width = 0;
  constructor(init_config: IBorder_image) {
    Object.keys(init_config).map((key) => {
      this.source = init_config.source
      this.outset = init_config.outset
      this.repeat = init_config.repeat
      this.slice = init_config.slice
      this.width = init_config.width
    })
  }
}
