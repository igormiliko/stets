import { ColorPallete } from "../../../../config/ColorPallete";
import { Border_image, TBorder_image_config } from "./Border_image";

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
  style?: TBorder_styles_possibilities;
  radius?: TBorder_radius;
  width?: TBorder_width;
  collapse?: TBorder_collapse;
  spacing?: TBorder_spacing
  image?: TBorder_image_config;
}
