import { ColorPallete } from "../../../../config/ColorPallete";
import { Border_image } from "./Border_image";

export type TBorder_ = [
  TBorder_styles | TGlobal_CSS_values,
  [TBorder_width?, TCSSmeasurementUnits?],
  (keyof ColorPallete["colors"])
];

export interface IBorder_config {
  border: TBorder_;
  left?: TBorder_ | null;
  top?: TBorder_ | null;
  right?: TBorder_ | null;
  bottom?: TBorder_ | null;
  x?: TBorder_ | null;
  y?: TBorder_ | null;
  color?: keyof ColorPallete["colors"] | null;
  style?: TBorder_styles | null;
  radius?: TBorder_radius | null;
  width?: TBorder_width | null;
  collapse?: TBorder_collapse | null;
  spacing?: TGlobal_CSS_values | number | null;
  image?: Border_image | null;
}

export class Border implements IBorder_config {
  border: TBorder_;
  left = null;
  top = null;
  right = null;
  bottom = null;
  x = null;
  y = null;
  color = null;
  style = null;
  radius = null;
  width = null;
  collapse = null;
  spacing = null;
  image = null;
  constructor(border: TBorder_) {
    this.border = border;
  }
}
