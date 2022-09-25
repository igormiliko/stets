import { ColorPallete } from "../../../../config/ColorPallete";
import { Abstract_segment_ring } from "../../AbstractSegmentRing";
export type TBorder_image_source =
  | string
  | {
      colors: [keyof ColorPallete["colors"], number?][];
      to?: [TDirections, TDirections?];
      repeat?: boolean;
      deg?: number;
    }
  | TGlobal_CSS_values
  | "none";

export type TBorder_image_config = {
  source: TBorder_image_source;
  outset: TBorder_image_outset;
  repeat: TBorder_image_repeat;
  slice: TBorder_image_slice;
  width: TBorder_image_width;
};

export interface IBorder_image {
  config: TBorder_image_config;
  element: HTMLElement | null | undefined;
  source: () => void;
  outset: () => void;
  repeat: () => void;
  slice: () => void;
  width: () => void;
}

export class Border_image extends Abstract_segment_ring implements IBorder_image {
  element;
  config;
  constructor(
    init_config: TBorder_image_config,
    element: HTMLElement | null | undefined
  ) {
    super()
    this.config = init_config;
    this.element = element;
    this.apply_config();
  }

  source() {
    try {
      if (typeof this.config.source === 'string') {
        console.log(this.config.source)
        // this.element!.style.borderImage = `url(${this.config.source})`
      }
    } catch (error) {
      throw new Error();
    }
  }
  outset() {
    try {
    } catch (error) {
      throw new Error();
    }
  }
  repeat() {
    try {
    } catch (error) {
      throw new Error();
    }
  }
  slice() {
    try {
    } catch (error) {
      throw new Error();
    }
  }
  width() {
    try {
      if(this.config.width) {
        console.log(this.element)
      //  this.element!.style.borderImage = "linear-gradient(#f6b73c, #4d9f0c) 30"
      //  this.element!.style.borderImageSource = "linear-gradient(#f6b73c, #4d9f0c) 30"
      //  this.TREAT_TCustom_square(this.config.width)
      }
    } catch (error) {
      throw new Error();
    }
  }

  apply_config() {
    try {
      Object.keys(this.config).map((key) => this[key]());
    } catch (error) {
      console.error("Error initing the border config => ", error);
    }
  }
}
