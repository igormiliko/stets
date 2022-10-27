import ColorPallete from "../../../../config/ColorPallete";
import { Abstract_segment_ring } from "../../AbstractSegmentRing";
import { Lines_piston } from "../Lines_piston";
import { IBorder_config } from "./Border";
import { Border_image } from "./Border_image";

type TReturn_transform_in_border_style_propertie =
  | "border"
  | "borderLeft"
  | "borderTop"
  | "borderRight"
  | "boredrBottom";

export class Border_segment_ring extends Abstract_segment_ring {
  private piston: Lines_piston;
  private border_config: IBorder_config | null = null;
  constructor(piston: Lines_piston) {
    super();
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
        const config = this.border_config[type];

        this.piston.element!.style[
          this.transform_in_border_style_propertie(type)
        ] = `${config![0]} ${config![1].join("")} ${
          config![2] ? ColorPallete.getColor(config![2]) : ""
        }`;
        return this.piston.element;
      }
    } catch (error) {
      console.error("Error while apllying order style => ", error);
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
  private x() {
    try {
      if (this.border_config) {
        const shared_ = this.border_config.x;

        this.border_config!.left = shared_;
        this.border_config!.right = shared_;
      }

      this.left();
      this.right();
      return this.piston.element;
    } catch (error) {
      console.error("Error applying the x axis border", error);
    }
  }

  private y() {
    if (this.border_config) {
      const shared_ = this.border_config.y;
      this.border_config.top = shared_;
      this.border_config.bottom = shared_;
    }

    this.top();
    this.bottom();
    return this.piston.element;
  }
  private radius() {
    this.piston.element!.style.borderRadius = this.TREAT_TCustom_square(
      this.border_config?.radius
    );

    return this.piston.element;
  }

  private collapse() {
    try {
      if (this.border_config) {
        this.piston.element!.style.borderCollapse =
          this.border_config.collapse || "";
        return this.piston.element;
      }
    } catch (error) {
      console.error("Error while applying the collapse propertie => ", error);
    }
  }

  private color() {
    try {
      if (this.border_config) {
        this.piston.element!.style.borderColor = Array.isArray(
          this.border_config.color
        )
          ? this.border_config.color
              .map((color) => (color ? ColorPallete.getColor(color) : ""))
              .join(" ")
          : String(this.border_config.color);
      }
      return this.piston.element;
    } catch (error) {
      console.error(
        "Error while apllying the color border properie => ",
        error
      );
    }
  }

  private style() {
    try {
      if (this.border_config) {
        this.piston.element!.style.borderStyle = Array.isArray(
          this.border_config.style
        )
          ? this.border_config.style.join(" ")
          : String(this.border_config.style);
        return this.piston.element;
      }
    } catch (error) {
      console.error(
        "Error while apllying the border style propertie => ",
        error
      );
    }
  }

  private width() {
    try {
      if(this.border_config) {
        this.piston.element!.style.borderWidth = this.TREAT_TCustom_square(
          this.border_config?.width
        )
        return this.piston.element;
      }
    } catch (error) {
      console.error(
        "Error while apllying the border width propertie => ",
        error
      );
    }
  }
  private spacing() {
    try {
      if(this.border_config) {
        this.piston.element!.style.borderSpacing =  this.TREAT_TCustom_square(this.border_config?.spacing)
        return this.piston.element;
      }
    } catch (error) {
      console.error("Error while applying the border spacing propertie => ", error)
    }
  }

  image() {
    try {
      if(this.border_config?.image) {
        new Border_image(this.border_config.image, this.piston.element)
        return this.piston.element;
      }
    } catch (error) {
      console.error("Error while applying the border image propertie => ", error)
    }
  }

  async init_config(config: IBorder_config) {
    try {
      this.border_config = config;
      Object.keys(this.border_config).map((key) => this[key]());
    } catch (error) {
      console.error("Error initing the border config => ", error);
    }
  }
}
