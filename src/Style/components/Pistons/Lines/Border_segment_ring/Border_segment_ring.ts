import ColorPallete from "../../../../config/ColorPallete";
import { Lines_piston } from "../Lines_piston";
import { IBorder_config } from "./Border";

type TReturn_transform_in_border_style_propertie =
  | "border"
  | "borderLeft"
  | "borderTop"
  | "borderRight"
  | "boredrBottom";

export class Border_segment_ring {
  private piston: Lines_piston;
  private border_config: IBorder_config | null = null;
  constructor(piston: Lines_piston) {
    this.piston = piston;
  }

  private transform_in_border_style_propertie(
    prop: "border" | TDirections
  ): "border" | "borderLeft" | "borderTop" | "borderRight" | "boredrBottom" {
    return prop === "border"
      ? prop
      : (`border${
          prop[0].toUpperCase() + prop.substring(1)
        }` as TReturn_transform_in_border_style_propertie);
  }

  private apply_TBorder_(type: "border" | TDirections) {
    try {
      if (this.border_config) {
        this.border_config[type]![2] = ColorPallete.getColor(
          this.border_config[type]![2]
        );
        if (this.piston.element) {
          this.piston.element.style[
            this.transform_in_border_style_propertie(type)
          ] = this.border_config[type]!.join(" ").replace(",", "");
        }
        return this.piston.element;
      }
    } catch (error) {
      console.error(error);
    }
  }
  private border() {
    return this.apply_TBorder_("border");
  }
  private left() {
    return this.apply_TBorder_("left");
  }
  private top() {
    return this.apply_TBorder_("top");
  }
  private right() {
    return this.apply_TBorder_("right");
  }
  private bottom() {
    return this.apply_TBorder_("bottom");
  }
  // x() {
  //   return this.piston.element;
  // }
  // y() {
  //   return this.piston.element;
  // }
  // color() {
  //   return this.piston.element;
  // }
  // style() {
  //   return this.piston.element;
  // }
  // radius() {
  //   return this.piston.element;
  // }
  // width() {
  //   return this.piston.element;
  // }
  // collapse() {
  //   return this.piston.element;
  // }
  // spacing() {
  //   return this.piston.element;
  // }
  // image() {
  //   return this.piston.element;
  // }

  init_config(config: IBorder_config) {
    this.border_config = config;
    Object.keys(this.border_config).map((key) => this[key]());
  }
}
