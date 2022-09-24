import { ColorPallete } from "../../../../config/ColorPallete";
import { Border_image } from "./Border_image";

export type TBorder_ = [
  TBorder_styles | TGlobal_CSS_values,
  [TBorder_width?, TCSSmeasurementUnits?],
  (keyof ColorPallete["colors"])?
];

export type TBorder_color =
  | [
      keyof ColorPallete["colors"],
      (keyof ColorPallete["colors"])?,
      (keyof ColorPallete["colors"])?,
      (keyof ColorPallete["colors"])?
    ]
  | keyof ColorPallete["colors"];

export interface IBorder_config {
  border?: TBorder_;
  left?: TBorder_;
  top?: TBorder_;
  right?: TBorder_;
  bottom?: TBorder_;
  x?: TBorder_;
  y?: TBorder_;
  color?: TBorder_color;
  style?: TBorder_styles;
  radius?: TBorder_radius;
  width?: TBorder_width;
  collapse?: TBorder_collapse;
  spacing?: TGlobal_CSS_values | number;
  image?: Border_image;
}
